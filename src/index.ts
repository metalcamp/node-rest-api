import {Server} from "./server";

if ((process.env.ROLE === "server") || (process.env.ROLE === undefined)) {
    console.log("running as server");
    const server = new Server();
    server.start();
}

if((process.env.ROLE === "publish-worker")){
    console.log("running as publish worker")
    // TODO
}

if((process.env.ROLE === "rss-worker")){
    console.log("running as rss worker")
    // TODO
}
