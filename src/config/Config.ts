class Config {
    public readonly port: number;
    public readonly env: string;
    public readonly dbConnectionType: string;
    public readonly dbHost: string;
    public readonly dbPort: number;
    public readonly dbUser: string;
    public readonly dbPassword: string;
    public readonly dbName: string;
    public readonly redisHost: string;
    public readonly redisPort: number;
    public readonly redisPassword: string;

    constructor() {
        this.port = parseInt(process.env.PORT, 10) || 3000;
        this.env = process.env.APP_ENV ?? 'prod';
        this.dbHost = process.env.DB_CONNECTION ?? 'postgres';
        this.dbHost = process.env.DB_HOST ?? 'localhost';
        this.dbPort = parseInt(process.env.DB_PORT, 10) || 5432;
        this.dbUser = process.env.DB_USER ?? 'postgres';
        this.dbPassword = process.env.DB_PASS ?? '';
        this.dbName = process.env.DB_NAME ?? '';
        this.redisHost = process.env.REDIS_HOST ?? 'localhost';
        this.redisPort = parseInt(process.env.REDIS_PORT, 10) || 6379;
        this.redisPassword = process.env.REDIS_PASS ?? '';
    }
}

export default new Config();
