const { app, BrowserWindow, ipcMain } = require('electron');
const { autoUpdater } = require('electron-updater');
//const app = electron.app;
//const BrowserWindow = electron.BrowserWindow;

/*require('update-electron-app')({repo: 'rosset_bruno/ebola/src/master',
		  updateInterval: '1 hour',
		  host: 'https://bitbucket.org' }
)*/

/*let mainWindow;

function createWindow () {

  mainWindow = new BrowserWindow({width: 1800, height: 1200});
  
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  mainWindow.on('closed', () => {
	  mainWindow = null;
  });
  
  mainWindow.once('ready-to-show', () => {
	autoUpdater.checkForUpdatesAndNotify();
	var valeur = prompt("Message à afficher");
  });
}*/

let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1800,
    height: 1200,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
  });
  mainWindow.loadFile('index.html');
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
  //mainWindow.once('ready-to-show', () => {
	autoUpdater.checkForUpdatesAndNotify();
  //});
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on('app_version', (event) => {
	event.sender.send('app_version', { version: app.getVersion() });
	//window.localStorage.setItem('version_app_detection]', app.getVersion());
});


/*Checking updates just after app launch and also notify for the same*/
/*app.on("ready", function() {
 autoUpdater.checkForUpdatesAndNotify();
});*/

autoUpdater.on('update-available', () => {
	mainWindow.webContents.on('did-finish-load', ()=>{
		mainWindow.webContents.send('update_available');
	})
	console.log('ok')
});

autoUpdater.on('update-downloaded', () => {
	mainWindow.webContents.send('update_downloaded');
});

ipcMain.on('restart_app', () => {
	autoUpdater.quitAndInstall();
});