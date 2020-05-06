import redis from "../redis";

export class RedisService {
    async listen(channelPattern?: string) {
        try {
            const channelPat = channelPattern ?? "*";
            console.log("start listening to redis messages");
            redis.psubscribe(channelPat, (err, count) => {
                console.log("subscribed to %s channel", channelPat);
            })

            redis.on('pmessage', (pattern, channel, message) => {
                console.log("received message %s from channel %s with pattern %s", message, channel, pattern);
            })
        } catch (e) {
            console.log(e);
        }
    }

    async publish(channels: string[], message: object) {
        try {
            for (const channel of channels) {
                console.log(`redis publish to channel ${channel}`);
                await redis.publish(channel, JSON.stringify(message));
            }
        } catch (e) {
            console.log(e);
        }

    }
}
