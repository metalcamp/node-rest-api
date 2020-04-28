import {Request, Response} from "express";
import {validationResult} from "express-validator";
import {Channel} from "../entities/Channel";
import {Subscriber} from "../entities/Subscriber";
import {ChannelSubscriber} from "../entities/ChannelSubscriber";

export let subscribe = async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()});
    }

    const {channel: channelName} = req.params;
    const {subscriberURL} = req.body;

    let channel = await Channel.findOne({title: channelName});

    if (channel === undefined) {
        channel = new Channel();
        channel.title = channelName;
        await channel.save();
    }

    let subscriber = await Subscriber.findOne({url: subscriberURL})

    if (subscriber === undefined) {
        subscriber = new Subscriber();
        subscriber.url = subscriberURL;
        await subscriber.save();
    }

    const params = {channelId: channel.id, subscriberId: subscriber.id};
    const channelSubscriber = await ChannelSubscriber.findOne(params)

    if (channelSubscriber === undefined) {
        await ChannelSubscriber.create(params).save();
    }

    res.status(201).send()
};
