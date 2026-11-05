import { Navigate, useLocation } from 'react-router-dom';
import { withTrailingSlash } from '../../lib/site';

/** Redirect `/blog` → `/blog/` so URLs match prerendered HTML and Vercel trailingSlash. */
export function TrailingSlash() {
  const { pathname, search, hash } = useLocation();
  const next = withTrailingSlash(pathname);
  if (next !== pathname) {
    return <Navigate to={`${next}${search}${hash}`} replace />;
  }
  return null;
}
