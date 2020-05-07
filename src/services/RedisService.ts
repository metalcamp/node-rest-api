import redis from "../redis";
import {PublishService} from "./PublishService";

export class RedisService {
    async listen(channelPattern?: string) {
        try {
            const channelPat = channelPattern ?? "*";
            console.log("start listening to redis messages");
            redis.psubscribe(channelPat, (err, count) => {
                console.log("subscribed to %s channel", channelPat);
            })

            redis.on('pmessage', (pattern, channel, message) => {
                console.log("received message %s from channel %s with pattern %s", JSON.stringify(message), channel, pattern);
                const publishService = new PublishService();
                publishService.publish(channel, message);
            })
        } catch (e) {
            console.log(e);
        }
    }

    async publish(channels: string[], message: any) {
        try {
            for (const channel of channels) {
                console.log(`redis publish to channel ${channel}`);
                await redis.publish(channel, message);
            }
        } catch (e) {
            console.log(e);
        }

    }
}
