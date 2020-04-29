import * as dotenv from "dotenv";
dotenv.config();
import app from './app';
import Config from './config/Config';
import {createConnection} from "typeorm";

export class Server {
    start() {
        const port: number = Config.port;
        const env: string = Config.env;
        const connection = createConnection()
            .then(async conn => {
                await conn.runMigrations();
            })
            .catch((error) => {
                console.log(error);
            });

        return app.listen(port, () => {
            console.log("app is running on http://localhost:%d in %s mode",
                port,
                env,
            )
        });
    }
}