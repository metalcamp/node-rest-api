import express, {Router} from "express";
import PublishController from "../controllers/publishController";

const router: Router = express.Router();
// TODO validation
router.post('/:channel', PublishController.publish)

export default router;
