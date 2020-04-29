import {ChannelSubscriber} from "../entities/ChannelSubscriber";

export class ChannelSubscriberRepository {
    async findByIds(channel: { id: int; }, subscriber: { id: int; }) {
        const cs = await ChannelSubscriber.findOne({channelId: channel.id, subscriberId: subscriber.id});
        return cs;
    }

    async store(channel: { id: int; }, subscriber: { id: int; }) {
        const cs = ChannelSubscriber.create({channelId: channel.id, subscriberId: subscriber.id}).save();
        return cs;
    }

    async delete(channel: { id: int; }, subscriber: { id: int; }) {
        await this.findByIds(channel, subscriber).then(cs => cs.remove());
    }
}
