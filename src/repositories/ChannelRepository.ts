import {Channel} from "../entities/Channel";
import {getConnection, EntityRepository} from "typeorm";

class ChannelRepository {
    async findAll(): Promise<Channel[]> {
        const res = await getConnection()
            .getRepository(Channel)
            .createQueryBuilder('channel')
            .select(['channel'])
            .orderBy({channel: 'ASC'})
            .getMany();

        console.log(res);

        return res;
    }

    async findByTitle(title: string): Promise<Channel> {
        return getConnection()
            .getRepository(Channel)
            .createQueryBuilder('channel')
            .select(['channel'])
            .where({title})
            .getOne();
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

    // async remove(title: string) {
    //     await this.findByTitle(title).then(c => c.remove());
    // }
}

export default new ChannelRepository();
