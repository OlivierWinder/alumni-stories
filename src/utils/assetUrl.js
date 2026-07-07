export function assetUrl(path) {
  if (!path) return path
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  const base = import.meta.env.BASE_URL
  return `${base}${path.replace(/^\//, '')}`
}
