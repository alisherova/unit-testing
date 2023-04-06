const pick = require('../object_methods/pick')

describe('pick', () => { 
    it("returns an object of the only specified keys in array", () => {
        const object = { 'a': 1, 'b': '2', 'c': 3 };
        const paths = ['a', 'c']
        const result = pick(object, paths);
        expect(result).toEqual({ a: 1, c: 3 });
    })
    it("returns an object of the only specified key passing as string", () => {
        const object = { 'a': 1, 'b': '2', 'c': 3 };
        const paths = 'a'
        expect(pick(object, paths)).toEqual({ 'a': 1 })
    })

    it("returns an empty object if no keys match", () => {
        const object = { a: 1, b: 2, c: 3 };
        const paths = ["d", "e"];
        const result = pick(object, paths)
        expect(result).toEqual({})
    })

    it("returns an original object if all keys match", () => {
        const object = { a: 1, b: 2, c: 3 };
        const paths = ["a", "b", "c"];
        const result = pick(object, paths)
        expect(result).toEqual({ a: 1, b: 2, c: 3 })
    })

    it("returns an empty object if the input object is empty", () => {
        const object = {};
        const paths = ["a", "b", "c"];
        const result = pick(object, paths);
        expect(result).toEqual({});
      });
    
      it("returns an empty object if the paths array is empty", () => {
        const object = { a: 1, b: 2, c: 3 };
        const paths = [];
        const result = pick(object, paths);
        expect(result).toEqual({});
      });
})