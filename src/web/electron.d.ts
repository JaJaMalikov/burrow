import type {
  IpcRenderer, Shell, WebviewTag, IpcRendererEvent, FileFilter
} from 'electron';
export const ipcRenderer: IpcRenderer;
export const shell: Shell;
export const webUtils: { getPathForFile(file: string): string };
export type { IpcRendererEvent, FileFilter, WebviewTag };
