import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Subscriber extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;
}
