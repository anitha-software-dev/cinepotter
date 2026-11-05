/**
 * JSON-LD structured data (Schema.org) helpers for SEO.
 * These are not marketing pixels — safe to render in all environments.
 */

import { SITE_ORIGIN } from './site';

export type JsonLd = Record<string, unknown> | Record<string, unknown>[];

const SITE_URL = SITE_ORIGIN;
const SITE_NAME = "CinePotter AI";

/** Organization + WebSite — use on the homepage (and optionally sitewide). */
export function organizationWebsiteSchema(): Record<string, unknown>[] {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.ico`,
      sameAs: [],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/resources?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ];
}

export function webPageSchema(opts: {
  name: string;
  description: string;
  url: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
  };
}

export function toJsonLdScriptContent(data: JsonLd): string {
  return JSON.stringify(data);
}
