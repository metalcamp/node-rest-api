import express = require("express");
import * as statusController from './controllers/status';

const app = express();

app.use(express.json());
app.get('/status', statusController.status);

export default app;
