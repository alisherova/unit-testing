const includes = require ("../array_methods/includes")

describe("includes", () => {
    it("should return true if the value is found in the collection", () => {
      const testCases = [
        { collection: "Hello, World!", value: "Hello", fromIndex: 0, expectedResult: true },
        { collection: "Hello, World!", value: "o", fromIndex: 4, expectedResult: true }, 
        { collection: [1, 2, 3, 4, 5], value: 3, fromIndex: 2, expectedResult: true },
        { collection: "Hello, World!", value: "Goodbye", fromIndex: 0, expectedResult: false },
        { collection: [1, 2, 3, 4, 5], value: 6, fromIndex: 0, expectedResult: false },
      ];
  
      testCases.forEach(({ collection, value, fromIndex, expectedResult }) => {
        const result = includes(collection, value, fromIndex);
        expect(result).toEqual(expectedResult);
      });
    });
  });
  