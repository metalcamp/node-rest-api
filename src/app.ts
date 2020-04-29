import express = require("express");
import router from "./routes/router";
import {Express} from "express";
import { errorHandler } from './middlewares/ErrorHandler';

const app: Express = express();

app.use(express.json());
app.use("/api/v1", router);
app.use(errorHandler());

export default app;
