import {Channel} from "../entities/Channel";

class ChannelRepository {
    async findByTitle(title: string) {
        const channel = await Channel.findOne({title});
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
        return Channel.create({title}).save();
    }

    async delete(title: string) {
        await this.findByTitle(title).then(c => c.remove());
    }
}

export default new ChannelRepository();
