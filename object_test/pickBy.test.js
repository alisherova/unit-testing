const pickBy = require("../object_methods/pickBy");

describe("pickBy", () => {
  it("should pick keys whose values are of the specified type", () => {
    const object = { a: 1, b: "2", c: null, d: undefined };
    const result = pickBy(object, "_.isNumber");
    expect(result).toEqual({ a: 1 });
  });

  it("should return an empty object if no keys are picked", () => {
    const object = { a: "1", b: "2", c: "3" };
    const result = pickBy(object, "_.isNumber");
    expect(result).toEqual({});
  });

  it("should return the original object if all keys are picked", () => {
    const object = { a: 1, b: 2, c: 3 };
    const result = pickBy(object, "_.isNumber");
    expect(result).toEqual(object);
  });

  it("should return the correct result for other types", () => {
    const object = { a: "1", b: 2, c: null, d: undefined };
    let result = pickBy(object, "_.isString");
    expect(result).toEqual({ a: "1" });

    result = pickBy(object, "_.isUndefined");
    expect(result).toEqual({ d: undefined });
  });
});
