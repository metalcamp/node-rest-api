import {RSSService} from "../services/RSSService";

export class RSSWorker {
    async start() {
        const rssService = new RSSService();
        setInterval(async () => {
            const rssItems = await rssService.parseFromFile();
            console.log("start publishing to api");
            rssItems.forEach((item) => {
                rssService.publish(item.guid, item);
            })
        }, 5 * 1000);
    }
}

