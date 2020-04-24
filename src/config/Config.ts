import * as dotenv from "dotenv";
dotenv.config();

class Config {
    public readonly port: number;
    public readonly env: string;
    public readonly dbConnectionType: string;
    public readonly dbHost: string;
    public readonly dbPort: number;
    public readonly dbUser: string;
    public readonly dbPassword: string;
    public readonly dbName: string;

    constructor() {
        this.port = parseInt(process.env.PORT, 10) || 3000;
        this.env = process.env.APP_ENV ?? 'prod';
        this.dbHost = process.env.DB_CONNECTION ?? 'postgres';
        this.dbHost = process.env.DB_HOST ?? 'localhost';
        this.dbPort = parseInt(process.env.DB_PORT, 10) || 5432;
        this.dbUser = process.env.DB_USER ?? 'postgres';
        this.dbPassword = process.env.DB_PASS ?? '';
        this.dbName = process.env.DB_NAME ?? '';
    }
}

export default new Config();
