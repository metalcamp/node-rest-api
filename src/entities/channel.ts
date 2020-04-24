import {PrimaryGeneratedColumn, Column, Entity} from "typeorm";

@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    title: string;

    @Column("text")
    description: string;

    @Column()
    isFinished: boolean;
}
