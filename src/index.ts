import {Server} from "./server";
import {RSSWorker} from "./workers/RSSWorker";
import {RedisListenerWorker} from "./workers/RedisListenerWorker";

if (process.env.START_PUBLISH_WORKER === "true") {
    console.log("running as publish worker");
    const listener = new RedisListenerWorker();
    listener.start();
}

if (process.env.START_RSS_WORKER === "true") {
    console.log("running as rss worker");
    const worker = new RSSWorker();
    worker.start();
}

if (process.env.START_SERVER === "true") {
    console.log("running as server");
    const server = new Server();
    server.start();
}
