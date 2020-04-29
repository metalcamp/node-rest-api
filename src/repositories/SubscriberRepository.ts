import {Subscriber} from "../entities/Subscriber";

export class SubscriberRepository {
    async findByURL(url: string) {
        const sub = await Subscriber.findOne({url});
        return sub;
    }

    async store(url: string) {
        const sub = await Subscriber.create({url}).save();
        return sub;
    }

    async delete(title: string) {
        await this.findByURL(title).then(c => c.remove());
    }
}
