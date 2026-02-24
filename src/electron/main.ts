import { app, BrowserWindow } from "electron";
import path from "path";
import { isDev } from "./util.ts";
import initServer from "./server/server.ts";

bootstrap();

function bootstrap() {
  // INICIAMOS EL SERVIDOR
  initServer();

  app.on("ready", () => {
    const mainWindow = new BrowserWindow({});
    console.log(path.join(app.getAppPath(), "/"))

    if (isDev()) {
      mainWindow.loadURL("http://localhost:5123");
    } else {
      mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
    }
  });
}
