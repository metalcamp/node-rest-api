import * as express from "express";
import {Router} from "express";
import statusRouter from "../routes/statusRouter";
import subscribeRouter from "../routes/subscribeRouter";
import unsubscribeRouter from "../routes/unsubscribeRouter";
import publishRouter from "../routes/publishRouter";

const router: Router = express.Router();

router.use('/status', statusRouter);
router.use('/subscribe', subscribeRouter);
router.use('/unsubscribe', unsubscribeRouter);
router.use('/publish', publishRouter);

export default router;
