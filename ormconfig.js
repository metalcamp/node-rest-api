import config from './src/config/Config';

module.exports = {
    "type": config.dbConnectionType,
    "host": config.dbHost,
    "port": config.dbPort,
    "username": config.dbUser,
    "password": config.dbPassword,
    "database": config.dbName
}
