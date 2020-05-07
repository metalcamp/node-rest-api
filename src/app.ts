import express = require("express");
import router from "./routes/router";
import {Express} from "express";
import {errorHandler} from './middlewares/ErrorHandler';
import {createConnection} from "typeorm";
import Config from './config/Config';
import logger from "./logger";

export class App {
    public app: Express;
    private readonly port: number;
    private readonly env: string;

    constructor() {
        this.port = Config.port;
        this.env = Config.env;
        this.app = express();
        this.connectToDatabase();
        this.initializeMiddlewares();
        this.initializeRoutes();
        this.initializeErrorHandling();
    }

    public listen() {
        this.app.listen(this.port, () => {
            logger.log("info", `app listening on the port ${this.port}`);
        });
    }

    public getServer() {
        return this.app;
    }

    private initializeRoutes() {
        this.app.use("/api/v1", router);
    }

    private initializeMiddlewares() {
        this.app.use(express.json());
    }

    private initializeErrorHandling() {
        this.app.use(errorHandler());
    }

    private connectToDatabase() {
        createConnection();
    }
}
