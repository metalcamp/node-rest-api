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
        'entities/**/*.ts'
    ],
    migrations: [
        'migrations/**/*.ts'
    ],
    subscribers: [
        'subscribers/**/*.ts'
    ],
})
    .then(async conn => {
        await conn.runMigrations();
    })
    .catch((error) => {
        console.log(error);
    });
