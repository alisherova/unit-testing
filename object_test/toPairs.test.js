const toPairs = require("../object_methods/toPairs");

describe("toPairs", () => {
    it("returns an array of key-value pairs for an object", () => {
        const obj = { a: 1, b: 2 };
        const pairs = toPairs(obj);
        expect(pairs).toEqual([
            ["a", 1],
            ["b", 2],
        ]);
    });
    
    it("returns an empty array for an empty object", () => {
        const obj = {};
        const pairs = toPairs(obj);
        expect(pairs).toEqual([]);
    });
});
