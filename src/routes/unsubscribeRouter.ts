import * as express from "express";
import {Router} from "express";
import * as unsubscribeController from "../controllers/unsubscribeController";

const router: Router = express.Router();

router.post('/unsubscribe/:channel', unsubscribeController.unsubscribe)

export default router;
