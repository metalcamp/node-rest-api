import redis from "../redis";

export class RedisService {
    publish(channels: string[], message: string) {
        channels.forEach(async (channel) => {
            await redis.publish(channel, message);
        });
    }
}
