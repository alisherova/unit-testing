const filter = require("../array_methods/filter")

describe("filter", () => {
    it("should return the first user that satisfies the condition", () => {
      const users = [
        { name: "John", age: 25, isAdmin: true },
        { name: "Jane", age: 32, isAdmin: false },
        { name: "Jim", age: 40, isAdmin: true },
      ];
  
      const testCases = [
        {
          func: (user) => user.age > 30,
          expectedResult: { name: "Jane", age: 32, isAdmin: false },
        },
        {
          func: "isAdmin",
          expectedResult: { name: "John", age: 25, isAdmin: true },
        },
        {
          func: ["isAdmin", false],
          expectedResult: { name: "Jane", age: 32, isAdmin: false },
        },
        {
          func: { name: "Jim", age: 40 },
          expectedResult: { name: "Jim", age: 40, isAdmin: true },
        },
      ];
  
      testCases.forEach(({ func, expectedResult }) => {
        const result = filter(users, func);
        expect(result).toEqual(expectedResult);
      });
    });
  });
  