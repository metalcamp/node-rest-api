import {Server} from "./server";
import {RSSWorker} from "./workers/RSSWorker";
import {RedisListenerWorker} from "./workers/RedisListenerWorker";

if (process.env.START_PUBLISH_WORKER === "true") {
    console.log("running as publish worker");
    while (1) ;
    // TODO
}

if (process.env.START_RSS_WORKER === "true") {
    console.log("running as rss worker");
    while (1) ;
    // const worker = new RSSWorker();
    // worker.start();
}

if (process.env.START_REDIS_LISTENER_WORKER === "true") {
    console.log("running as redis listener worker");
    const worker = new RedisListenerWorker();
    worker.start();
}

if (process.env.START_SERVER === "true" || process.env.START_SERVER === undefined) {
    console.log("running as server");
    const server = new Server();
    server.start();
}
