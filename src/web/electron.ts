export const ipcRenderer = {
  send: (..._args: any[]) => {},
  on: (..._args: any[]) => {},
  off: (..._args: any[]) => {},
  invoke: async () => undefined,
};

export const shell = {
  openExternal: (url: string) => {
    window.open(url, '_blank');
  },
};

export const webUtils = {
  getPathForFile(file: File): string {
    return (file as any).path || file.name;
  },
};
