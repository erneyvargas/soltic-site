import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({});
const NOTIFY = process.env.NOTIFY_EMAIL;

const cors = {
  "Access-Control-Allow-Origin":  "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "content-type",
};

const json = (status, body) => ({
  statusCode: status,
  headers: { ...cors, "content-type": "application/json" },
  body: JSON.stringify(body),
});

const esc = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

export const handler = async (event) => {
  if (event.requestContext?.http?.method === "OPTIONS") {
    return { statusCode: 204, headers: cors };
  }

  let data;
  try {
    data = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { error: "invalid json" });
  }

  // honeypot: si el bot llena `website`, respondemos 200 pero no enviamos
  if (data.website) return json(200, { ok: true });

  const { name, email, phone, company, msg } = data;
  if (!name || !email || !msg) {
    return json(400, { error: "missing fields" });
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return json(400, { error: "invalid email" });
  }
  if (msg.length > 5000) {
    return json(413, { error: "message too long" });
  }

  const subject = `Nuevo contacto — ${name}${company ? ` · ${company}` : ""}`;
  const text = [
    `Nombre:   ${name}`,
    `Empresa:  ${company || "-"}`,
    `Correo:   ${email}`,
    `Teléfono: ${phone || "-"}`,
    ``,
    `Mensaje:`,
    msg,
  ].join("\n");

  const html = `
    <h2 style="font-family:sans-serif;">Nuevo contacto desde el sitio</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;">
      <tr><td><b>Nombre</b></td><td>${esc(name)}</td></tr>
      <tr><td><b>Empresa</b></td><td>${esc(company || "-")}</td></tr>
      <tr><td><b>Correo</b></td><td><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
      <tr><td><b>Teléfono</b></td><td>${esc(phone || "-")}</td></tr>
    </table>
    <h3 style="font-family:sans-serif;">Mensaje</h3>
    <p style="font-family:sans-serif;white-space:pre-wrap;">${esc(msg)}</p>
  `;

  try {
    await ses.send(
      new SendEmailCommand({
        Source: NOTIFY,
        Destination: { ToAddresses: [NOTIFY] },
        ReplyToAddresses: [email],
        Message: {
          Subject: { Data: subject, Charset: "UTF-8" },
          Body: {
            Text: { Data: text, Charset: "UTF-8" },
            Html: { Data: html, Charset: "UTF-8" },
          },
        },
      })
    );
    return json(200, { ok: true });
  } catch (err) {
    console.error("SES error", err);
    return json(500, { error: "email failed" });
  }
};
