import {Request, Response} from "express";
import redis from "../redis";
import {Channel} from "../entities/Channel";

export let publish = async (req: Request, res: Response) => {
    const {channel: channelName} = req.params;

    // TODO support glob pattern matching
    let channel = await Channel.findOne({title: channelName});

    if (channel === undefined) {
        channel = await Channel.create({title: channelName}).save();
    }

    await redis.publish(channelName, req.body);
    res.status(201)
};
