import {ChannelSubscriber} from "../entities/ChannelSubscriber";

class ChannelSubscriberRepository {
    async findByIds(channelId: number, subscriberId: number) {
        const cs = await ChannelSubscriber.findOne({channelId, subscriberId});
        return cs;
    }

    async store(channel: { id: number; }, subscriber: { id: number; }) {
        const cs = ChannelSubscriber.create({channelId: channel.id, subscriberId: subscriber.id}).save();
        return cs;
    }

    async delete(channelId: number, subscriberId: number) {
        await this.findByIds(channelId, subscriberId).then(cs => cs.remove());
    }
}

export default new ChannelSubscriberRepository();
