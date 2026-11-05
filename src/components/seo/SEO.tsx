import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { toJsonLdScriptContent, webPageSchema, type JsonLd } from '../../lib/schema';
import { canonicalUrl } from '../../lib/site';

const DEFAULT_OG_IMAGE = 'https://www.cinepotter.com/og/cinepotter-og.png';
const DEFAULT_OG_IMAGE_ALT = 'CinePotter AI — AI Video Production Platform';

interface SEOProps {
  title: string;
  description: string;
  /** Path or absolute URL. Always normalized to https://www.cinepotter.com. */
  canonical?: string;
  /** Absolute URL for social share preview. Defaults to the brand OG image. */
  image?: string;
  imageAlt?: string;
  /** One or more Schema.org JSON-LD graphs */
  jsonLd?: JsonLd;
  robots?: string;
}

export function SEO({
  title,
  description,
  canonical,
  image = DEFAULT_OG_IMAGE,
  imageAlt = DEFAULT_OG_IMAGE_ALT,
  jsonLd,
  robots = 'index,follow',
}: SEOProps) {
  const { pathname } = useLocation();
  const canonicalHref = canonicalUrl(canonical || pathname);
  const extra = jsonLd
    ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd])
    : [];
  const graphs = [
    webPageSchema({ name: title, description, url: canonicalHref }),
    ...extra,
  ];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonicalHref} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalHref} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="CinePotter AI" />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {graphs.map((graph, i) => (
        <script key={i} type="application/ld+json">
          {toJsonLdScriptContent(graph)}
        </script>
      ))}
    </Helmet>
  );
}

/** Fallback www canonical on every route. Page-level <SEO> overrides title, robots, and canonical. */
export function RouteCanonical() {
  const { pathname } = useLocation();
  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl(pathname)} />
    </Helmet>
  );
}
