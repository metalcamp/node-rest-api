import app from './app';
import Config from './config/Config';
import {createConnection} from "typeorm";

const port: number = Config.port;
const env: string = Config.env;

const connection = createConnection()
    .then(async conn => {
        await conn.runMigrations();
    })
    .catch((error) => {
        console.log(error);
    });

const server = app.listen(port, () => {
    console.log("app is running on http://localhost:%d in %s mode",
        port,
        env,
    )
});

export default server;
