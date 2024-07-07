const { app, BrowserView, BrowserWindow } = require('electron')

function createWindow (){
const win = new BrowserWindow({ width: 800, height: 600,  show: false, })
win.loadURL('http://127.0.0.1:8000/api')

var splash = new BrowserWindow({ 
    width: 500, 
    height: 300, 
    transparent: true, 
    frame: false, 
    alwaysOnTop: true ,
    icon:'bug.ico'
  });
  
  splash.loadFile('index.html');
  splash.center();
  setTimeout(function () {
    splash.close();
    win.center();
    win.show();
  }, 5000);

}



function create_splash_screem()
{
}

app.whenReady().then(() => {

    createWindow()
  
 
})

// var splash = new BrowserWindow({
//     width: 500, 
//     height: 300, 
//     transparent: true, 
//     frame: false, 
//     alwaysOnTop: true 
// });


// splash.loadFile('index.html');
// splash.center();

// setTimeout(function () {
//     splash.close();
//     mainWindow.show();
//   }, 5000);