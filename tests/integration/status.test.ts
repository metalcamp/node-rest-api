// tslint:disable-next-line:no-implicit-dependencies
import request from "supertest";
import {App} from '../../src/app';

describe("This is a simple status test", () => {
    test("Check that status route exists and returns 200",  () => {
        const app = (new App()).getServer();
        const res = request(app)
            .get('/api/v1/status')
            .expect(200)
    });

    test("Check some random route does not exist and returns 404",  () => {
        const app = (new App()).getServer();
        const res = request(app)
            .get('/api/v1/status/232394')
            .expect(404)
    });
});
