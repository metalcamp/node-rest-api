import redis from "../redis";

export class RedisService {
    listen(channel?: string) {
        if (channel === undefined) {
            channel = "*";
        }

        redis.psubscribe(channel, (err, message) => {
            if (err) {
                console.log(err);
            }

            console.log(`received message: ${message}`, message);
        });
    }

    publish(channels: string[], message: string) {
        channels.forEach(async (channel) => {
            await redis.publish(channel, message);
        });
    }
}
