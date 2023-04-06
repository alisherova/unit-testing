const zip = require('../array_methods/zip')

describe('zip', () => {
    it('returns an array of arrays of the same length as the shortest input array', () => {
      const result = zip([1, 2, 3], [4, 5, 6], [7, 8, 9]);
      expect(result).toEqual([[1, 4, 7], [2, 5, 8], [3, 6, 9]]);
    });
  
    it('returns an empty array when passed no arrays', () => {
      const result = zip();
      expect(result).toEqual([]);
    }); 
  });
  