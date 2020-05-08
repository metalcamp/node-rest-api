import typeorm = require("typeorm");
import {Channel} from "../../../src/entities/Channel";
import ChannelRepository from "../../../src/repositories/ChannelRepository";

describe("Channel repository", () => {
   it('get all', async () => {
       const fakeQueryBuilder = jest.fn().mockReturnValue({
           orderBy: jest.fn().mockReturnThis(),
           getMany: jest.fn().mockResolvedValue('0x0'),
           getOne: jest.fn().mockResolvedValue('0x1'),
           select: jest.fn().mockReturnThis(),
       })

       typeorm.getConnection = jest.fn().mockReturnValue({
           getRepository: jest.fn().mockReturnValue({ createQueryBuilder: fakeQueryBuilder })
       })
       const result = await ChannelRepository.findAll();

       expect(result).toEqual('0x0')

       const queryBuilder = typeorm.getConnection().getRepository(Channel).createQueryBuilder
       expect(queryBuilder).toHaveBeenNthCalledWith(1, 'channel')
       expect(queryBuilder().orderBy).toHaveBeenNthCalledWith(1, { channel: 'ASC' })
       expect(queryBuilder().getMany).toHaveBeenNthCalledWith(1)
       expect(queryBuilder().select).toHaveBeenNthCalledWith(1, ['channel'])
   })
});
