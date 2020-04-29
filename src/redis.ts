import Redis from "ioredis";
import Config from "./config/Config";

const redis = new Redis({
    port: Config.redisPort,
    host: Config.redisHost,
    password: Config.redisPassword
});

export default redis;
