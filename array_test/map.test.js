const map = require('../array_methods/map')

describe("map", () => {
    it("should return a new array with the results of calling the iteratee on each element", () => {
      const users = [
        { name: "John", age: 25 },
        { name: "Jane", age: 32 },
        { name: "Jim", age: 40 },
      ];
  
      const testCases = [
        {
          collection: users,
          iteratee: (user) => user.name,
          expectedResult: ["John", "Jane", "Jim"],
        },
        {
          collection: users,
          iteratee: "age",
          expectedResult: [25, 32, 40],
        },
      ];
  
      testCases.forEach(({ collection, iteratee, expectedResult }) => {
        const result = map(collection, iteratee);
        expect(result).toEqual(expectedResult);
      });
    });
  });
  