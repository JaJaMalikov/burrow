export const ipcRenderer = {
  send: (..._args: any[]) => {},
  sendSync: (..._args: any[]) => undefined,
  invoke: async (..._args: any[]) => undefined,
  on: (..._args: any[]) => {},
  off: (..._args: any[]) => {},
};
export const shell = {
  openExternal: (url: string) => { window.open(url, '_blank'); }
};
export const webUtils = {
  getPathForFile: (file: string) => file
};
export type IpcRendererEvent = any;
export type FileFilter = any;
