import {createConnection} from "typeorm";
import Config from "./config/Config";

export default createConnection({
    type: Config.dbConnectionType,
    host: Config.dbHost,
    port: Config.dbPort,
    database: Config.dbName,
    username: Config.dbUser,
    password: Config.dbPassword,
    entities: [
        'entities/**/*.{ts,js}'
    ],
    migrations: [
        'migrations/**/*.{ts,js}'
    ],
    subscribers: [
        'subscribers/**/*.{ts,js}'
    ],
})
    .then(async conn => {
        await conn.runMigrations();
    })
    .catch((error) => {
        console.log("there was an error establishing db connection");
        console.log(error);
    });
