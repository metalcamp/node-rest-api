import * as express from "express";
import {Router} from "express";
import * as unsubscribeController from "../controllers/unsubscribeController";
import {check} from "express-validator";

const router: Router = express.Router();

router.post('/:channel',
    [
        check('subscriberURL').isURL(),
    ],
    unsubscribeController.unsubscribe)

export default router;
