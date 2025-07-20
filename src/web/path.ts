export function basename(p: string): string {
  const segments = p.split(/[/\\]/);
  return segments[segments.length - 1] || '';
}

export function dirname(p: string): string {
  const parts = p.split(/[/\\]/);
  parts.pop();
  return parts.join('/') || '.';
}

export function extname(p: string): string {
  const base = basename(p);
  const i = base.lastIndexOf('.');
  return i >= 0 ? base.slice(i) : '';
}

export function join(...parts: string[]): string {
  return parts.join('/').replace(/[/\\]+/g, '/');
}
