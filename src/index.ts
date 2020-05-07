import * as dotenv from "dotenv";
import {Server} from "./server";
import {RSSWorker} from "./workers/RSSWorker";
import {RedisListenerWorker} from "./workers/RedisListenerWorker";
import logger from "./logger";
dotenv.config();

if (process.env.START_PUBLISH_WORKER === "true") {
    logger.log("info", "running as publish worker");
    const listener = new RedisListenerWorker();
    listener.start();
}

if (process.env.START_RSS_WORKER === "true") {
    logger.log("info", "running as rss worker");
    const worker = new RSSWorker();
    worker.start();
}

if (process.env.START_SERVER === "true") {
    logger.log("info", "running as server");
    const server = new Server();
    server.start();
}
