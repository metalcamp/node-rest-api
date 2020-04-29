import {SubscribeToChannelRequest} from "../interfaces/Channel";
import ChannelRepository from "../repositories/ChannelRepository";
import SubscriberRepository from "../repositories/SubscriberRepository";
import ChannelSubscriberRepository from "../repositories/ChannelSubscriberRepository";

class ChannelService {
    async subscribe(channelTitle: string, data: SubscribeToChannelRequest) {
        const channel = await ChannelRepository.findByTitleOrCreate(channelTitle);
        const subscriber = await SubscriberRepository.findByURLOrCreate(data.subscriberURL);
        const channelSubscriber = ChannelSubscriberRepository.findByIds(channel.id, subscriber.id);
    }

    // TODO
    // async unsubscribe(){
    //
    // }

    // TODO
    // async publish(){
    //
    // }
}

export default new ChannelService()
