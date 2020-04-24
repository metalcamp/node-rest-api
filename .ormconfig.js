import config from './src/config/Config';

console.log(config);

module.exports = {
    type: config.dbConnectionType,
    host: config.dbHost,
    port: config.dbPort,
    username: config.dbUser,
    password: config.dbPassword,
    database: config.dbName,
    logging: false,
    synchronize: true,
    entities: [
        "dist/entities/**/*.js"
    ],
    // subscribers: [
    //     "src/subscribers/t.js"
    // ],
    // entitySchemas: [
    //     "src/schema/*.json"
    // ],
    migrations: [
        "src/migrations/**/*.ts"
    ],
    cli: {
        entitiesDir: "src/entities",
        migrationsDir: "src/migrations",
        // subscribersDir: "subscribers"
    }
}
