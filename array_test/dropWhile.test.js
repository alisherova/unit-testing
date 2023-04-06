const dropWhile = require('../array_methods/dropWhile')

describe('dropWhile function', () => {
    it('should remove elements from the beginning of the users array while the specified condition is met', () => {
      const users = [
        { 'user': 'barney', 'active': false },
        { 'user': 'fred', 'active': false },
        { 'user': 'pebbles', 'active': true }
      ];
      const func = 'active';
      const expectedResult = [
        { 'user': 'barney', 'active': false },
        { 'user': 'fred', 'active': false },
        { 'user': 'pebbles', 'active': true }
      ];
      expect(dropWhile(users, func)).toEqual(expectedResult);
    });
  
    it('should remove elements from the beginning of the users array while multiple specified conditions are met', () => {
      const users = [
        { 'user': 'barney', 'active': false, 'age': 36 },
        { 'user': 'fred', 'active': false, 'age': 40 },
        { 'user': 'pebbles', 'active': true, 'age': 1 }
      ];
      const func = ['active', false];
      const expectedResult = [
        { 'user': 'pebbles', 'active': true, 'age': 1 }
      ];
      expect(dropWhile(users, func)).toEqual(expectedResult);
    });
  
    it('should remove elements from the beginning of the users array while an object of conditions is met', () => {
      const users = [
        { 'user': 'barney', 'active': false, 'age': 36 },
        { 'user': 'fred', 'active': false, 'age': 40 },
        { 'user': 'pebbles', 'active': true, 'age': 1 }
      ];
      const func = { 'active': false, 'age': 36 };
      const expectedResult = [
        { 'user': 'fred', 'active': false, 'age': 40 },
        { 'user': 'pebbles', 'active': true, 'age': 1 }
      ];
      expect(dropWhile(users, func)).toEqual(expectedResult);
    });
  });
  