const drop = require("../array_methods/drop");

describe("drop", () => {
  it("should drop the first element when n is not provided", () => {
    const result = drop([1, 2, 3]);
    expect(result).toEqual([2, 3]);
  });

  it("should drop the first n elements when n is provided", () => {
    const result = drop([1, 2, 3, 4, 5], 3);
    expect(result).toEqual([4, 5]);
  });

  it("should return the original array when n is 0 or negative", () => {
    const result1 = drop([1, 2, 3], 0);
    expect(result1).toEqual([1, 2, 3]);

    const result2 = drop([1, 2, 3], -1);
    expect(result2).toEqual([1, 2, 3]);
  });

  it("should return empty array when n is greater than array's length", () => {
    const result = drop([1, 2], 3);
    expect(result).toEqual([]);
  });
});
