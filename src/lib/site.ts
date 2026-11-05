/** Public marketing-site origin used in canonicals, sitemap, and JSON-LD. */
export const SITE_ORIGIN = 'https://www.cinepotter.com';

const FILE_EXT = /\.[a-zA-Z0-9]{1,8}$/;

/** Next.js-style trailingSlash: `/blog` → `/blog/`. Files and `/` are left as-is. */
export function withTrailingSlash(pathname: string): string {
  const path = pathname || '/';
  if (path === '/') return '/';
  const last = path.split('/').filter(Boolean).pop() || '';
  if (FILE_EXT.test(last)) return path.replace(/\/+$/, '');
  const trimmed = path.replace(/\/+$/, '');
  return `${trimmed}/`;
}

/**
 * Build a www canonical URL from a path or absolute cinepotter URL.
 * Always uses a trailing slash (except for files).
 */
export function canonicalUrl(pathOrUrl = '/'): string {
  let pathname = '/';
  const raw = String(pathOrUrl || '/').trim() || '/';
  try {
    if (/^https?:\/\//i.test(raw)) {
      const parsed = new URL(raw);
      pathname = parsed.pathname || '/';
    } else {
      pathname = raw.startsWith('/') ? raw : `/${raw}`;
    }
  } catch {
    pathname = '/';
  }
  return `${SITE_ORIGIN}${withTrailingSlash(pathname)}`;
}
