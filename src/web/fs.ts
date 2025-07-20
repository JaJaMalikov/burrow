export async function readFile(_path: string, _encoding?: string): Promise<string> {
  throw new Error('fs.readFile is not available in web mode');
}

export async function writeFile(_path: string, _data: string): Promise<void> {
  throw new Error('fs.writeFile is not available in web mode');
}

export function watch(_path: string, _options?: unknown): AsyncIterable<unknown> {
  return {
    async *[Symbol.asyncIterator]() {}
  } as AsyncIterable<unknown>;
}

export async function readdir(_path: string, _opts?: unknown): Promise<unknown[]> {
  return [];
}
