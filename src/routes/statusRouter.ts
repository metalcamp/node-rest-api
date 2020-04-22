import * as express from "express";
import {Router} from "express";
import * as statusController from "../controllers/statusController";

const router: Router = express.Router();

router.get('/', statusController.status)

export default router;
