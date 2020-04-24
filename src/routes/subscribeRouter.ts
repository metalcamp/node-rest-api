import * as express from "express";
import {Router} from "express";
import * as subscribeController from "../controllers/subscribeController";

const router: Router = express.Router();

router.post('/subscribe/:channel', subscribeController.subscribe)

export default router;
