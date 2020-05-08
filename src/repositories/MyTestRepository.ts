import {getConnection, getRepository, createQueryBuilder} from "typeorm";
import {Channel} from "../entities/Channel";

class MyTestRepository {
    public getAll(): Promise<Channel[]> {
        return getConnection()
            .getRepository(Channel)
            .createQueryBuilder('channel')
            .orderBy({ channel: 'ASC'})
            .getMany();
    }
}

export const myTestRepository = new MyTestRepository();
