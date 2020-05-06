import {RedisService} from "../services/RedisService";

export class RedisListenerWorker {
    async start() {
        const redis = new RedisService();
        await redis.listen();
    }
}
