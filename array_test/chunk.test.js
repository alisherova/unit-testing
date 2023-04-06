const chunk = require("../array_methods/chunk")

describe('chunk function', () => {
  it('should return an array of arrays with the specified size', () => {
    const array = [1, 2, 3, 4, 5];
    const size = 2;
    const expectedResult = [[1, 2], [3, 4], [5]];
    expect(chunk(array, size)).toEqual(expectedResult);
  });

  it('should use a default size of 1 if no size argument is provided', () => {
    const array = [1, 2, 3, 4, 5];
    const expectedResult = [[1], [2], [3], [4], [5]];
    expect(chunk(array)).toEqual(expectedResult);
  });
});

  