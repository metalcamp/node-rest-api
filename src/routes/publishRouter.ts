import * as express from "express";
import {Router} from "express";
import * as publishController from "../controllers/publishController";

const router: Router = express.Router();

// TODO validation
router.post('/publish/:channel', publishController.publish)

export default router;
