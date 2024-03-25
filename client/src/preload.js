// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  openDialog: (method, config) => ipcRenderer.invoke("dialog", method, config),
  createFolder: (arg) => ipcRenderer.invoke("create-folder", arg),
  bdd: (arg) => ipcRenderer.invoke("bdd", arg),
});
