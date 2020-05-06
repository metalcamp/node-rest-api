import {SubscribeToChannelRequest, UnsubscribeFromChannelRequest} from "../interfaces/Channel";
import ChannelRepository from "../repositories/ChannelRepository";
import SubscriberRepository from "../repositories/SubscriberRepository";
import ChannelSubscriberRepository from "../repositories/ChannelSubscriberRepository";
import {HandledError} from "../errors/HandledError";
import {ErrorType} from "../interfaces/HandledError";
import {RedisService} from "./RedisService";
import multimatch from "multimatch";

class ChannelService {
    async subscribe(channelTitle: string, data: SubscribeToChannelRequest) {
        try {
            const channel = await ChannelRepository.findByTitleOrCreate(channelTitle);
            const subscriber = await SubscriberRepository.findByURLOrCreate(data.subscriberURL);
            const channelSubscriber = await ChannelSubscriberRepository.findByIds(channel.id, subscriber.id);
        } catch (e) {
            throw new HandledError(ErrorType.Database, 'Could not store data');
        }
    }

    async unsubscribe(channelTitle: string, data: UnsubscribeFromChannelRequest) {
        const {subscriberURL} = data;
        try {
            const channel = await ChannelRepository.findByTitle(channelTitle);
            const subscriber = await SubscriberRepository.findByURL(subscriberURL)
            const channelSubscriber = await ChannelSubscriberRepository.findByIds(channel.id, subscriber.id)

            await channelSubscriber.remove();
        } catch (e) {
            throw new HandledError(ErrorType.ResourceNotFound, 'Resource not found');
        }
    }

    async publish(channelPattern: string, message: any) {
        try {
            const channels = await ChannelRepository.findAll();
            const filteredChannels = multimatch(channels.map((c) => c.title), [channelPattern]);

            if (filteredChannels.length === 0) {
                const channel = await ChannelRepository.store(channelPattern);
                filteredChannels.push(channel.title)
            }

            const redisService = new RedisService();
            redisService.publish(filteredChannels, message);
        } catch (e) {
            console.log(e.message);
            throw new HandledError(ErrorType.Database, 'Something went wrong in db');
        }
    }
}

export default new ChannelService()
