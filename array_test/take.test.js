const take = require("../array_methods/take");

describe("take", () => {
  it("should take the first element when n is not provided", () => {
    const result = take([1, 2, 3]);
    expect(result).toEqual([1]);
  });

  it("should take the first n elements when n is provided", () => {
    const result = take([1, 2, 3, 4, 5], 3);
    expect(result).toEqual([1, 2, 3]);
  });

  it("should return the original array when n is 0 or negative", () => {
    const result1 = take([1, 2, 3], 0);
    expect(result1).toEqual([1, 2, 3]);

    const result2 = take([1, 2, 3], -1);
    expect(result2).toEqual([1, 2, 3]);
  });

  it("should return original array when n is greater than array's length", () => {
    const result = take([1, 2], 3);
    expect(result).toEqual([1, 2]);
  });
});
