import {ChannelSubscriber} from "../entities/ChannelSubscriber";
import {EntityRepository, getConnection, Repository} from "typeorm";

@EntityRepository(ChannelSubscriber)
class ChannelSubscriberRepository extends  Repository<ChannelSubscriber>{
    async findWithIds(channelId: number, subscriberId: number) {
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

    // async delete(channelId: number, subscriberId: number) {
    //     await this.findByIds(channelId, subscriberId).then(cs => cs.remove());
    // }
}

export default new ChannelSubscriberRepository();
