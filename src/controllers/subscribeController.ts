import {Request, Response} from "express";
import {validationResult} from "express-validator";
import {Channel} from "../entities/channel";
import {Subscriber} from "../entities/subscriber";

export let subscribe = async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()});
    }

    const {channel: channelName} = req.params;
    const {subscriberURL} = req.body;

    let channel = await Channel.findOne({title: channelName});
    console.log(channel);

    if (channel === undefined) {
        channel = new Channel();
        channel.title = channelName;
        await channel.save();
    }

    let subscriber = await Subscriber.findOne({url: subscriberURL})
    console.log(subscriber);

    if (subscriber === undefined) {
        subscriber = new Subscriber();
        subscriber.url = subscriberURL;
        await subscriber.save();
    }

    console.log(subscriber);

    res.status(201).send()
};
