import {SubscribeToChannelRequest, UnsubscribeFromChannelRequest} from "../interfaces/Channel";
import ChannelRepository from "../repositories/ChannelRepository";
import SubscriberRepository from "../repositories/SubscriberRepository";
import ChannelSubscriberRepository from "../repositories/ChannelSubscriberRepository";
import {HandledError} from "../errors/HandledError";
import {ErrorType} from "../interfaces/HandledError";
import {RedisService} from "./RedisService";
import multimatch from "multimatch";
import {Channel} from "../entities/Channel";

export class ChannelService {
    async subscribe(channelTitle: string, data: SubscribeToChannelRequest) {
        try {
            const channel = await ChannelRepository.findByTitleOrCreate(channelTitle);
            const subscriber = await SubscriberRepository.findByURLOrCreate(data.subscriberURL);
            let channelSubscriber = await ChannelSubscriberRepository.findOne({
                channelId: channel.id,
                subscriberId: subscriber.id
            });

            if (channelSubscriber === undefined) {
                channelSubscriber = await ChannelSubscriberRepository.save({
                    channelId: channel.id,
                    subscriberId: subscriber.id
                });
            }
        } catch (e) {
            throw new HandledError(ErrorType.Database, 'Could not store data');
        }
    }

    async unsubscribe(channelTitle: string, data: UnsubscribeFromChannelRequest) {
        const {subscriberURL} = data;
        try {
            const channel = await ChannelRepository.findByTitle(channelTitle);
            const subscriber = await SubscriberRepository.findByURL(subscriberURL)

            const channelSubscriber = await ChannelSubscriberRepository.findOne({
                channelId: channel.id,
                subscriberId: subscriber.id
            })
            await channelSubscriber.remove();
        } catch (e) {
            throw new HandledError(ErrorType.ResourceNotFound, 'Resource not found');
        }
    }

    async getChannels(channelPattern: string) {
        const channels = await ChannelRepository.findAll();
        const patternFilteredChannels = multimatch(channels.map((c) => c.title), [channelPattern]);

        return channels.filter((channel) => {
            return patternFilteredChannels.includes(channel.title);
        });
    }

    async publishToRedis(channels: Channel[], message: any) {
        const redisService = new RedisService();
        await redisService.publish(channels.map((c) => c.title), JSON.stringify(message));
    }

    async publish(channelPattern: string, message: any) {
        try {
            const filteredChannels = await this.getChannels(channelPattern);

            if (filteredChannels.length === 0) {
                const channel = await ChannelRepository.store(channelPattern);
                filteredChannels.push(channel)
            }

            await this.publishToRedis(filteredChannels, message);
        } catch (e) {
            throw new HandledError(ErrorType.Database, 'Something went wrong in db');
        }
    }

    // TODO optimize query
    async findSubscribers(channelPattern: string) {
        try {
            // get channels
            const channels = await this.getChannels(channelPattern);

            // find channel subscribers
            const channelFilter: object[] = [];

            channels.forEach((c) => {
                channelFilter.push({channelId: c.id});
            });

            // TODO fix
            const channelSubscribers = await ChannelSubscriberRepository.find({
                where: channelFilter
            });

            const subscribers = await SubscriberRepository.findByIds(channelSubscribers.map((cs) => cs.subscriberId));
            return subscribers;
        } catch (e) {
            console.log(e);
            throw new HandledError(ErrorType.Database, 'Something went wrong in db');
        }
    }
}

export default new ChannelService();
