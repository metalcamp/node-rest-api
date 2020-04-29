import {Subscriber} from "../entities/Subscriber";

export class SubscriberRepository {
    findByURL(url: string) {
        return Subscriber.findOne({url});
    }

    store(url: string) {
        return Subscriber.create({url}).save();
    }

    delete(title: string) {
        return this.findByURL(title).then(c => c.remove());
    }
}
