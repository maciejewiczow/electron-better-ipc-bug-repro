import { ipcMain, ipcRenderer } from "electron-better-ipc";

export const register = () =>
    ipcMain.answerRenderer<string, void>('test', (data: string) => {
        console.count('main');
        console.log(`Got data from renderer! ${data}`)
    })

export const sendData = (data: string) => ipcRenderer.callMain<string, void>('test', data);

