import {Channel} from "../entities/Channel";

export class ChannelRepository {
    findByTitle(title: string) {
        return Channel.findOne({title});
    }

    store(title: string) {
        return Channel.create({title}).save();
    }

    delete(title: string) {
        return this.findByTitle(title).then(c => c.remove());
    }
}
