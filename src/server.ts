import app from './app';
import Config from './config/Config';
// import dbConnection from './db';
import {createConnection} from "typeorm";
import logger from "./logger";

export class Server {
    start() {
        const port: number = Config.port;
        const env: string = Config.env;
        // const connection = dbConnection;
        const connection = createConnection();
        return app.listen(port, () => {
            logger.log("info", `app is running on http://127.0.0.1:${port} in ${env} mode`);
        });
    }
}
