import redis from "../redis";

export class RedisService {
    listen(channel?: string) {
        if (channel === undefined) {
            channel = "*";
        }

        return new Promise((resolve, reject) => {
            redis.psubscribe(channel, (err, message) => {
                if (err) {
                    return reject(err);
                }

                console.log(`received message: ${message}`);
            });
        });
    }

    publish(channels: string[], message: string) {
        channels.forEach(async (channel) => {
            await redis.publish(channel, message);
        });
    }
}
