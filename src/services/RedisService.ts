import redis from "../redis";
import {PublishService} from "./PublishService";
import logger from "../logger";

export class RedisService {
    async listen(channelPattern?: string) {
        try {
            const channelPat = channelPattern ?? "*";
            logger.log("info", "start listening to redis messages");
            redis.psubscribe(channelPat, (err, count) => {
                logger.log("info", `subscribed to ${channelPat}`);
            })

            redis.on('pmessage', (pattern, channel, message) => {
                const logMsg = `received message ${JSON.stringify(message)} from channel ${channel} with pattern ${pattern}`;
                logger.log("info", logMsg);

                const publishService = new PublishService();
                publishService.publish(channel, message);
            })
        } catch (e) {
            logger.log("error", e)
        }
    }

    async publish(channels: string[], message: any) {
        try {
            for (const channel of channels) {
                logger.log("info", `redis publish to channel ${channel}`);
                await redis.publish(channel, message);
            }
        } catch (e) {
            logger.log("error", e)
        }

    }
}
