import express, {Router} from "express";
import * as subscribeController from "../controllers/subscribeController";
import {check} from "express-validator";

const router: Router = express.Router();

router.post('/:channel',
    [
        check('subscriberURL').isURL(),
    ],
    subscribeController.subscribe)

export default router;
