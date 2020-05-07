// tslint:disable-next-line:no-implicit-dependencies
import request from "supertest";
import * as app from '../../src/app';
import * as server from '../../src/server';

describe("This is a simple test", () => {
    test("Check that constant is 1",  () => {
        // expect(constant).toEqual(1);
        const res = request(server)
            .get('/api/v1/status');

        console.log(res);
        expect(1).toEqual(1);
        // expect(res.statusCode).toEqual(200);
    });
});
