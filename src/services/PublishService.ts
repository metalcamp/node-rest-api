import {Subscriber} from "../entities/Subscriber";
import {PublishMessage} from "../interfaces/PublishMessage";
import axios from "axios";
import {ChannelService} from "./ChannelService";

export class PublishService {
    // TODO refactor
    async publishToClients(subscribers: Subscriber[], message: PublishMessage) {
        subscribers.forEach((subscriber) => {
            try {
                console.log("posting message to %s", subscriber.url);
                axios.post(subscriber.url, message)
            } catch (e) {
                console.log(e);
            }
        })
    }

    async publish(channelPattern: string, message: any) {
        const channelService = new ChannelService();
        const subscribers = await channelService.findSubscribers(channelPattern);
        const msg = {body: message, channel: channelPattern};
        await this.publishToClients(subscribers, msg);
    }
}
