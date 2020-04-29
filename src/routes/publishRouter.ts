import express, {Request, Response, Router} from "express";
import AsyncMiddleware from "../middlewares/AsyncMiddleware";
import ChannelService from "../services/ChannelService";

const router: Router = express.Router();

// router.post('/:channel', PublishController.publish)


router.post('/:channel', AsyncMiddleware(async (req: Request, res: Response) => {
    const publishRequest = req.body;
    const {channel} = req.params;

    // TODO
    // validateSchema<any, ObjectSchema>(publishRequest, publishToChannelSchema);

    res.status(201).send(await ChannelService.publish(channel, publishRequest));
}));

export default router;
