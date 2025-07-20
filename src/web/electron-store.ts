export default class Store {
  private data: Record<string, unknown>;
  events = new EventTarget();

  constructor() {
    try {
      this.data = JSON.parse(localStorage.getItem('burrow-settings') ?? '{}');
    } catch {
      this.data = {};
    }
  }

  get(key: string, defaultValue?: unknown): unknown {
    return Object.prototype.hasOwnProperty.call(this.data, key)
      ? this.data[key]
      : defaultValue;
  }

  set(key: string, value: unknown): void {
    this.data[key] = value;
    localStorage.setItem('burrow-settings', JSON.stringify(this.data));
    this.events.dispatchEvent(new Event('change'));
  }

  onDidChange(key: string, callback: (val: unknown) => void): () => void {
    const handler = () => callback(this.get(key));
    this.events.addEventListener('change', handler);
    return () => this.events.removeEventListener('change', handler);
  }
}
