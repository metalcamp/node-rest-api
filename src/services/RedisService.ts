import redis from "../redis";
import Config from "../config/Config";
import Redis from "ioredis";

export class RedisService {
    listen() {
        // if (channel === undefined) {
        //     channel = "*";
        // }
        //
        // return new Promise((resolve, reject) => {
        //     redis.psubscribe('*', (err, message) => {
        //         if (err) {
        //             console.log(err.message);
        //             // return reject(err);
        //         }
        //
        //         console.log(`received message: ${message}`);
        //     });
        // });
        const redis2 = new Redis({
            port: Config.redisPort,
            host: Config.redisHost,
            password: Config.redisPassword
        });

        redis2.on('message', (channel, message) => {
            console.log("received message %s from channel %s", message, channel);
        })

        redis2.on('pmessage', (pattern, channel, message) => {
            console.log("received message %s from channel %s", message, channel);
        })
    }

    publish(channels: string[], message: string) {
        try {
            const redis3 = new Redis({
                port: Config.redisPort,
                host: Config.redisHost,
                // password: Config.redisPassword
            });

            redis3.publish("test", "test").then(() => console.log("published"));
            // channels.forEach(async (channel) => {
            //     console.log(`redis publish to channel ${channel}`);
            //     await redis.publish(channel, message);
            // });
        }catch (e) {
             console.log(e);
        }

    }
}
