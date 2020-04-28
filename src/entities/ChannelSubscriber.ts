// @ts-ignore
import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Channel} from "./Channel";
import {Subscriber} from "./Subscriber";

@Entity()
export class ChannelSubscriber extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    channelId: number;

    @Column()
    subscriberId: number;

    @ManyToOne(() => Channel, channel => channel.subscriberConnection, {primary: true})
    @JoinColumn({name: "channelId"})
    channel: Promise<Channel>;

    @ManyToOne(() => Subscriber, subscriber => subscriber.channelConnection, {
        primary: true
    })
    @JoinColumn({name: "subscriberId"})
    subscriber: Promise<Subscriber>;
}
