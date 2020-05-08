// tslint:disable-next-line:no-implicit-dependencies
import request from "supertest";
import app from "../utils/setupApp";

describe("This is a simple status test", () => {
    test("Check that status route exists and returns 200",async () => {
        const myApp = await app;
        const res = request(myApp)
            .get('/api/v1/status')
            .expect(200)
    });

    test("Check some random route does not exist and returns 404", async () => {
        const myApp = await app;
        const res = await request(myApp)
            .get('/api/v1/status/232394')
            .expect(404)
    });
});
