import express, {Router} from "express";
import statusRouter from "../routes/statusRouter";
import subscribeRouter from "../routes/subscribeRouter";
import unsubscribeRouter from "../routes/unsubscribeRouter";
import publishRouter from "../routes/publishRouter";
import {ApiOperationGet, ApiPath, SwaggerDefinitionConstant} from "swagger-express-ts";

const router: Router = express.Router();

ApiPath({
    path: "/version",
    name: "Version"
})
ApiOperationGet( {
    description : "Get version object",
    summary : "Get version",
    responses : {
        200 : { description : "Success", type : SwaggerDefinitionConstant.Response.Type.ARRAY  , model : "Version" }
    }
} )
router.use('/status', statusRouter);
router.use('/subscribe', subscribeRouter);
router.use('/unsubscribe', unsubscribeRouter);
router.use('/publish', publishRouter);

export default router;
