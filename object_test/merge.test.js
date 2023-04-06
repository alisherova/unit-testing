const merge = require('../object_methods/merge')

describe("merge", () => {
    it("merges two objects with no overlapping keys", () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { c: 3, d: 4 };
      const result = merge(obj1, obj2);
      expect(result).toEqual({ a: 1, b: 2, c: 3, d: 4 });
    });
  
    it("merges two objects with overlapping keys", () => {
      const obj1 = { a: [1, 2] };
      const obj2 = { a: [3, 4] };
      const result = merge(obj1, obj2);
      expect(result).toEqual({ a: [1, 2, 3, 4] });
    });
  
    it("returns the first object if the second object is empty", () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = {};
      const result = merge(obj1, obj2);
      expect(result).toEqual({ a: 1, b: 2 });
    });
  
    it("returns an empty object if both objects are empty", () => {
      const obj1 = {};
      const obj2 = {};
      const result = merge(obj1, obj2);
      expect(result).toEqual({});
    });
  });
  