// @ts-ignore
import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class ChannelSubscriber extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    channelId: number;

    @Column()
    subscriberId: number;

}
