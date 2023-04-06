const omitBy = require('../object_methods/omitBy')

describe("omitBy", () => {
    it("should omit keys whose values are of the specified type", () => {
      const object = { a: 1, b: "2", c: null, d: undefined };
      const result = omitBy(object, "_.isNumber");
      expect(result).toEqual({ b: "2", c: null, d: undefined });
    });
  
    it("should return an empty object if all keys are omitted", () => {
      const object = { a: 1, b: 2, c: 3 };
      const result = omitBy(object, "_.isNumber");
      expect(result).toEqual({});
    });
  
    it("should return the original object if no keys are omitted", () => {
      const object = { a: "1", b: "2", c: "3" };
      const result = omitBy(object, "_.isNumber");
      expect(result).toEqual(object);
    });
  
    it("should return the correct result for other types", () => {
      const object = { a: "1", b: 2, c: null, d: undefined };
      let result = omitBy(object, "_.isString");
      expect(result).toEqual({ b: 2, c: null, d: undefined });
  
      result = omitBy(object, "_.isUndefined");
      expect(result).toEqual({ a: "1", b: 2, c: null }); 
      
    });
  
    it("should return an empty object if type is invalid", () => {
      const object = { a: "1", b: 2, c: null, d: undefined };
      const result = omitBy(object, "invalid type");
      expect(result).toEqual({});
    });
  });
  