import * as express from "express";
import {Router} from "express";
import statusRouter from "../routes/statusRouter";

const router: Router = express.Router();

router.use('/status', statusRouter);

export default router;
