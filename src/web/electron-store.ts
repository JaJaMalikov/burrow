export default class ElectronStore<T extends Record<string, any> = Record<string, unknown>> {
  private data: Record<string, any>;
  events = new EventTarget();

  constructor() {
    const saved = localStorage.getItem('burrow_settings');
    this.data = saved ? JSON.parse(saved) : {};
  }

  get(key: string, defaultValue?: any): any {
    return key in this.data ? this.data[key] : defaultValue;
  }

  set(key: string, value: any): void {
    this.data[key] = value;
    localStorage.setItem('burrow_settings', JSON.stringify(this.data));
    this.events.dispatchEvent(new Event('change'));
  }

  onDidChange(key: string, callback: (value: any) => void): () => void {
    const handler = () => callback(this.get(key));
    this.events.addEventListener('change', handler);
    return () => this.events.removeEventListener('change', handler);
  }
}
