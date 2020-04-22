import express = require("express");
import router from "./routes/router";

const app = express();

app.use(express.json());
app.use("/api/v1", router);


export default app;
