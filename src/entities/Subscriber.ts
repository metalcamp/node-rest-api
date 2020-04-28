import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ChannelSubscriber} from "./ChannelSubscriber";

@Entity()
export class Subscriber extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @OneToMany(() => ChannelSubscriber, cs => cs.subscriber)
    channelConnection: Promise<ChannelSubscriber[]>;
}
