import {Channel} from "../entities/Channel";
import {getConnection, EntityRepository} from "typeorm";

@EntityRepository(Channel)
class ChannelRepository {
    async findByTitle(title: string) {
        const channel = await getConnection().manager.findOne(Channel, {title});
        return channel;
    }

    async findByTitleOrCreate(title: string) {
        let channel = await this.findByTitle(title);

        if (channel === undefined) {
            channel = await this.store(title);
        }

        return channel;
    }

    async store(title: string) {
        const channel = await getConnection().manager.create(Channel, {title}).save();
        return channel;
    }

    async delete(title: string) {
        await this.findByTitle(title).then(c => c.remove());
    }
}

export default new ChannelRepository();
