export function pathToFileURL(p: string): URL {
  if (!p.startsWith('/')) p = '/' + p;
  return new URL('file://' + p);
}
