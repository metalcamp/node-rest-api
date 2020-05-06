import express, {Request, Response, Router} from "express";
import ChannelService from "../services/ChannelService";
import {SubscribeToChannelRequest} from "../interfaces/Channel";
import {subscribeToChannelSchema} from "../middlewares/schemas/ChannelSchema"
import AsyncMiddleware from "../middlewares/AsyncMiddleware";
import {validateSchema} from "../middlewares/ValidateSchema";
import {ObjectSchema} from '@hapi/joi';

const router: Router = express.Router();

router.post('/:channel', AsyncMiddleware(async (req: Request, res: Response) => {
    const subscribeRequest = req.body as SubscribeToChannelRequest;
    const {channel} = req.params;

    validateSchema<SubscribeToChannelRequest, ObjectSchema>(subscribeRequest, subscribeToChannelSchema);

    res.status(201).send(await ChannelService.subscribe(channel, subscribeRequest));
}));

router.post('/client', AsyncMiddleware(async (req: Request, res: Response) => {
    console.log("received new message:\n" + req.body);
}));

export default router;
