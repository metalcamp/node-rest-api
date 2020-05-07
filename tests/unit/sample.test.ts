const constant: number = 1

const asyncFunction = async () => {
    return Promise.resolve(1);
}

describe("This is a simple test", () => {
    test("Check that constant is 1", () => {
        expect(constant).toEqual(1);
    });
});

describe("This is a simple promise test", () => {
    test("Check that promise resolves",  () => {
        const p = Promise.resolve(1);
        expect(p).resolves.toEqual(1)
    });
});

describe("This is a simple async test", () => {
    test("Check that async function returns expected value",  async() => {
        const p = await asyncFunction();
        expect(p).toEqual(1)
    });
});
