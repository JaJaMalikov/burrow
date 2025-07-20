export default class ElectronStore {
  events = new EventTarget();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(_options: unknown = {}) {}
  get(key: string, defaultValue?: unknown): unknown {
    const item = localStorage.getItem(key);
    if (item === null) return defaultValue;
    try { return JSON.parse(item); } catch { return item; }
  }
  set(key: string, value: unknown): void {
    localStorage.setItem(key, JSON.stringify(value));
    this.events.dispatchEvent(new CustomEvent(key, { detail: value }));
    this.events.dispatchEvent(new Event('change'));
  }
  onDidChange(key: string, callback: (newValue: unknown) => void): () => void {
    const listener = (e: Event) => callback((e as CustomEvent).detail);
    this.events.addEventListener(key, listener);
    return () => this.events.removeEventListener(key, listener);
  }
}
