import express = require("express");
import router from "./routes/router";
import {Express} from "express";

const app: Express = express();

app.use(express.json());
app.use("/api/v1", router);

export default app;
