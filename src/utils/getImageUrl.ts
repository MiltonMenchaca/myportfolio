/**
 * Prefixes local image paths with Vite's BASE_URL so that
 * they resolve correctly both in development (/) and on
 * GitHub Pages (/Portfolio/).
 *
 * External URLs (starting with http/https) are returned as-is.
 */
export const img = (path: string): string => {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  // Remove leading slash if present, then join with BASE_URL
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${base}/${clean}`;
};
