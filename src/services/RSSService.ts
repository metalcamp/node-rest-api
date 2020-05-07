import Parser from "rss-parser";
import fs from "fs";
import axios from "axios";
import logger from "../logger";

export class RSSService {
    private readonly rssURL: string = "https://meteo.arso.gov.si/uploads/probase/www/observ/surface/text/sl/observation_si_latest.rss";
    private readonly apiURL: string = "http://localhost:3000/api/v1/publish/";
    private parser: Parser;

    constructor() {
        this.parser = new Parser();
    }

    async parseFromURL(url?: string) {
        try {
            const rssURL = url ?? this.rssURL;
            const feed = await this.parser.parseURL(rssURL);
            return feed.items;
        } catch (e) {
            logger.log("error", e)
        }
    }

    async parseFromFile(pathToFile?: string) {
        try {
            logger.log("info", "parsing file");

            const filePath = pathToFile ?? "observation_si_latest.rss";
            const data = await fs.readFileSync(filePath, "utf8");
            const feed = await this.parser.parseString(data);
            return feed.items;
        } catch (e) {
            logger.log("error", e)
        }
    }

    async publish(channel: string, message: object) {
        try {
            const url = this.apiURL + encodeURI(channel);
            logger.log("info", `posting to channel: ${channel}, url: ${url}`);

            await axios.post(url, message);
        } catch (e) {
            logger.log("error", e);
        }
    }
}

