import {RedisService} from "../services/RedisService";

export class RedisListenerWorker {
    start() {
        const redis = new RedisService();
        redis.listen();
    }
}
