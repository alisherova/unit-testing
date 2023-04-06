const omit = require('../object_methods/omit')

describe("omit", () => {
    it("returns a new object without the specified keys", () => {
      const obj = { a: 1, b: 2, c: 3 };
      const keys = ["a", "c"];
      const result = omit(obj, keys);
      expect(result).toEqual({ b: 2 });
    });
  
    it("returns the original object if none of the keys match", () => {
      const obj = { a: 1, b: 2, c: 3 };
      const keys = ["d", "e"];
      const result = omit(obj, keys);
      expect(result).toEqual({ a: 1, b: 2, c: 3 });
    });
  
    it("returns an empty object if all keys match", () => {
      const obj = { a: 1, b: 2, c: 3 };
      const keys = ["a", "b", "c"];
      const result = omit(obj, keys);
      expect(result).toEqual({});
    });
  
    it("returns the original object if the input object is empty", () => {
      const obj = {};
      const keys = ["a", "b", "c"];
      const result = omit(obj, keys);
      expect(result).toEqual({});
    });
  
    it("returns the original object if the keys array is empty", () => {
      const obj = { a: 1, b: 2, c: 3 };
      const keys = [];
      const result = omit(obj, keys);
      expect(result).toEqual({ a: 1, b: 2, c: 3 });
    });
  });
  