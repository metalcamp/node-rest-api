import express, {Router} from "express";
import * as publishController from "../controllers/publishController";

const router: Router = express.Router();

// TODO validation
router.post('/:channel', publishController.publish)

export default router;
