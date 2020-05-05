import {ChannelSubscriber} from "../entities/ChannelSubscriber";
import {getConnection} from "typeorm";

class ChannelSubscriberRepository {
    async findByIds(channelId: number, subscriberId: number) {
        const cs = await getConnection().manager.findOne(ChannelSubscriber, {channelId, subscriberId});
        return cs;
    }

    async store(channel: { id: number; }, subscriber: { id: number; }) {
        const cs = getConnection().manager.create(ChannelSubscriber, {
            channelId: channel.id,
            subscriberId: subscriber.id
        }).save();
        return cs;
    }

    async delete(channelId: number, subscriberId: number) {
        await this.findByIds(channelId, subscriberId).then(cs => cs.remove());
    }
}

export default new ChannelSubscriberRepository();
