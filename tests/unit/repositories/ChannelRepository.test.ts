import typeorm = require("typeorm");
import {Channel} from "../../../src/entities/Channel";
import {myTestRepository} from "../../../src/repositories/MyTestRepository";

describe("test repository", () => {
   it('get all channels', async () => {
       const fakeQueryBuilder = jest.fn().mockReturnValue({
           orderBy: jest.fn().mockReturnThis(),
           getMany: jest.fn().mockResolvedValue('0x0')
       })

       typeorm.getConnection = jest.fn().mockReturnValue({
           getRepository: jest.fn().mockReturnValue({ createQueryBuilder: fakeQueryBuilder })
       })
       const result = await myTestRepository.getAll()

       expect(result).toEqual('0x0')

       const queryBuilder = typeorm.getConnection().getRepository(Channel).createQueryBuilder
       expect(queryBuilder).toHaveBeenNthCalledWith(1, 'channel')
       expect(queryBuilder().orderBy).toHaveBeenNthCalledWith(1, { channel: 'ASC' })
       expect(queryBuilder().getMany).toHaveBeenNthCalledWith(1)
   })
});
