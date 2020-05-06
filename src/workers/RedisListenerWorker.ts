import {RedisService} from "../services/RedisService";

export class RedisListenerWorker {
    start() {
        const redisService = new RedisService();
        redisService.listen();
    }
}
