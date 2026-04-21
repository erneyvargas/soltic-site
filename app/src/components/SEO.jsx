const BASE = "https://d11b2hq3pithnt.cloudfront.net";
const DEFAULT_IMAGE = `${BASE}/images/about-hero.jpg`;

export default function SEO({
  title,
  description = "Soltic S.A.S. — Agencia digital que diseña, construye y escala productos tecnológicos con criterio. Bogotá · Colombia.",
  path = "",
  image = DEFAULT_IMAGE,
  schema,
}) {
  const fullTitle = title ? `${title} — Soltic S.A.S.` : "Soltic S.A.S. — Agencia de producto digital";
  const url = `${BASE}${path}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Soltic S.A.S." />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1600" />
      <meta property="og:image:height" content="900" />
      <meta property="og:locale" content="es_CO" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </>
  );
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Soltic S.A.S.",
  url: BASE,
  logo: `${BASE}/favicon.svg`,
  description: "Agencia digital que diseña, construye y escala productos tecnológicos con criterio.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bogotá",
    addressCountry: "CO",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "hola@soltic.com.co",
    telephone: "+57-300-000-0000",
    contactType: "sales",
    areaServed: ["CO", "MX", "US", "ES"],
  },
  sameAs: [
    "https://www.linkedin.com/company/soltic",
    "https://github.com/soltic",
  ],
};
