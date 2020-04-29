import {SubscribeToChannelRequest, UnsubscribeFromChannelRequest} from "../interfaces/Channel";
import ChannelRepository from "../repositories/ChannelRepository";
import SubscriberRepository from "../repositories/SubscriberRepository";
import ChannelSubscriberRepository from "../repositories/ChannelSubscriberRepository";
import {HandledError} from "../errors/HandledError";
import {ErrorType} from "../interfaces/HandledError";

class ChannelService {
    async subscribe(channelTitle: string, data: SubscribeToChannelRequest) {
        try {
            const channel = await ChannelRepository.findByTitleOrCreate(channelTitle);
            const subscriber = await SubscriberRepository.findByURLOrCreate(data.subscriberURL);
            const channelSubscriber = ChannelSubscriberRepository.findByIds(channel.id, subscriber.id);
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

    // TODO
    // async publish(){
    //
    // }
}

export default new ChannelService()
