export const ipcRenderer = {
  send: () => {},
  sendSync: () => undefined,
  invoke: async () => undefined,
  on: () => {}
};

export const webUtils = {
  getPathForFile(file: File): string {
    return (file as unknown as { path?: string }).path ?? file.name;
  }
};
