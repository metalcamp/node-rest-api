import {ChannelSubscriber} from "../entities/ChannelSubscriber";

export class ChannelSubscriberRepository {
    findByIds(channel: { id: int; }, subscriber: { id: int; }) {
        return ChannelSubscriber.findOne({channelId: channel.id, subscriberId: subscriber.id});
    }

    store(channel: { id: int; }, subscriber: { id: int; }) {
        return ChannelSubscriber.create({channelId: channel.id, subscriberId: subscriber.id}).save();
    }

    delete(channel: { id: int; }, subscriber: { id: int; }) {
        return this.findByIds(channel, subscriber).then(cs => cs.remove());
    }
}
