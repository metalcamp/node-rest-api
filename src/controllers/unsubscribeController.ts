import {Request, Response} from "express";
import {validationResult} from "express-validator";
import {Channel} from "../entities/Channel";
import {Subscriber} from "../entities/Subscriber";
import {ChannelSubscriber} from "../entities/ChannelSubscriber";

export let unsubscribe = async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()});
    }

    const {channel: channelName} = req.params;
    const {subscriberURL} = req.body;

    const channel = await Channel.findOne({title: channelName});
    const subscriber = await Subscriber.findOne({url: subscriberURL})
    const channelSubscriber = await ChannelSubscriber.findOne({
        channelId: channel.id,
        subscriberId: subscriber.id
    })

    if (channelSubscriber === undefined) {
        res.status(404)
    }

    await channelSubscriber.remove();

    res.status(204)
};
