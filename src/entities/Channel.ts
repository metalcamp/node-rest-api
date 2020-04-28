import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ChannelSubscriber} from "./ChannelSubscriber";

@Entity()
export class Channel extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    title: string;

    @OneToMany(() => ChannelSubscriber, cs => cs.channel)
    subscriberConnection: Promise<ChannelSubscriber[]>
}
