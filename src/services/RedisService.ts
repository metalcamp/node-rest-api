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
        try {
            channels.forEach(async (channel) => {
                console.log(`redis publish to channel ${channel}`);
                await redis.publish(channel, message);
            });
        }catch (e) {
             console.log(e);
        }

    }
}
