import express, {Request, Response, Router} from "express";
import AsyncMiddleware from "../middlewares/AsyncMiddleware";
import {SubscribeToChannelRequest, UnsubscribeFromChannelRequest} from "../interfaces/Channel";
import {validateSchema} from "../middlewares/ValidateSchema";
import {ObjectSchema} from "@hapi/joi";
import {unsubscribeFromChannelSchema} from "../middlewares/schemas/ChannelSchema";
import ChannelService from "../services/ChannelService";

const router: Router = express.Router();

router.post('/:channel', AsyncMiddleware(async (req: Request, res: Response) => {
    const unsubscribeRequest = req.body as UnsubscribeFromChannelRequest;
    const {channel} = req.params;

    validateSchema<SubscribeToChannelRequest, ObjectSchema>(unsubscribeRequest, unsubscribeFromChannelSchema);

    res.status(204).send(await ChannelService.unsubscribe(channel, unsubscribeRequest));
}));

export default router;
