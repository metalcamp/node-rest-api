class Config {
    public readonly port: number;
    public readonly env: string;

    constructor() {
        this.port = parseInt(process.env.PORT ?? '3000');
        this.env = process.env.ENV ?? 'dev';
    }
}

export default new Config();
