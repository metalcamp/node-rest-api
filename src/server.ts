import * as dotenv from "dotenv";
dotenv.config();
import app from './app';
import Config from './config/Config';
import dbConnection from './db';

export class Server {
    start() {
        const port: number = Config.port;
        const env: string = Config.env;
        const connection = dbConnection;
        return app.listen(port, () => {
            console.log("app is running on http://localhost:%d in %s mode",
                port,
                env,
            )
        });
    }
}
