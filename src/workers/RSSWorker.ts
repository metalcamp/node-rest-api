import Parser from "rss-parser";
import fs from "fs";

export class RSSWorker {
    private readonly url: string = "https://meteo.arso.gov.si/uploads/probase/www/observ/surface/text/sl/observation_si_latest.rss";
    private parser: Parser;

    constructor() {
        this.parser = new Parser();
    }

    async parseFromURL(url?: string) {
        try {
            const rssURL = url ?? this.url;
            const feed = await this.parser.parseURL(rssURL);
            return feed.items;
        } catch (e) {
            console.log(e);
        }
    }

    async parseFromFile(pathToFile?: string) {
        try {
            const filePath = pathToFile ?? "observation_si_latest.rss";
            const data = await fs.readFileSync(filePath, "utf8");
            const feed = await this.parser.parseString(data);
            return feed.items;
        } catch (e) {
            console.log(e);
        }
    }
}

