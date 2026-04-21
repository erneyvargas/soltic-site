import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function BlogPost() {
  const { slug } = useParams();
  return (
    <article className="mx-auto max-w-3xl px-6 pt-36 pb-28">
      <Link
        to="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-navy-500 hover:text-violet dark:text-navy-200"
      >
        <ArrowLeft size={14} /> Volver al blog
      </Link>
      <h1 className="font-poppins mt-8 text-4xl font-bold leading-tight text-navy-900 dark:text-white sm:text-5xl">
        Post: <span className="bg-gradient-to-r from-violet to-teal bg-clip-text text-transparent">{slug}</span>
      </h1>
      <p className="mt-4 font-mono text-xs uppercase tracking-wider text-navy-500 dark:text-navy-200">
        Este es un placeholder. Conecta un CMS (Contentful, Sanity, MDX local) para servir contenido real.
      </p>
      <div className="prose prose-lg dark:prose-invert mt-10 max-w-none text-navy-700 dark:text-navy-100">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          euismod, nisl eget consectetur sagittis, nisl nunc consectetur nisi,
          eget consectetur nisl nisi eget nisi.
        </p>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas.
        </p>
      </div>
    </article>
  );
}
