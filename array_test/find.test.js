const find = require('../array_methods/find')

describe('find', () => {
    let users;
  
    beforeEach(() => {
      users = [
        { user: "barney", age: 36, active: true },
        { user: "fred", age: 40, active: false },
        { user: "pebbles", age: 1, active: true },
      ];
    });
  
    it('returns object for barney when passed a function', () => {
      const result = find(users, function(o) { return o.age < 40; });
      expect(result).toEqual({ user: "barney", age: 36, active: true });
    });
  
    it('returns object for pebbles when passed an object', () => {
      const result = find(users, { 'age': 1, 'active': true });
      expect(result).toEqual({ user: "pebbles", age: 1, active: true });
    });
  
    it('returns object for fred when passed an array', () => {
      const result = find(users, ['active', false]);
      expect(result).toEqual({ user: "fred", age: 40, active: false });
    });
  
    it('returns object for barney when passed a string', () => {
      const result = find(users, 'active');
      expect(result).toEqual({ user: "barney", age: 36, active: true });
    });
  
    it('returns undefined when no match is found', () => {
      const result = find(users, ['active', 'not-active']);
      expect(result).toBeUndefined();
    });
  });
  