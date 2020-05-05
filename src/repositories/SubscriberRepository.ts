import {Subscriber} from "../entities/Subscriber";
import {getConnection} from "typeorm";

class SubscriberRepository {
    async findByURL(url: string) {
        const sub = await getConnection().manager.findOne(Subscriber, {url});
        return sub;
    }

    async findByURLOrCreate(url: string) {
        let sub = await this.findByURL(url);

        if (sub === undefined) {
            sub = await this.store(url);
        }

        return sub;
    }

    async store(url: string) {
        const sub = await getConnection().manager.create(Subscriber, {url}).save();
        return sub;
    }

    async delete(title: string) {
        await this.findByURL(title).then(c => c.remove());
    }
}

export default new SubscriberRepository();
