import {Server} from "./server";
import {RSSWorker} from "./workers/RSSWorker";

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

if (process.env.START_SERVER === "true") {
    console.log("running as server");
    const server = new Server();
    server.start();
}
