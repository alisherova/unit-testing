const compact = require('../array_methods/compact')

describe('compact', () => { 
    it('returns an array with only truthy values out of the passed array', () => {
        const array = [0, 1, false, 2, '', 3]
        expect(compact(array)).toEqual([1, 2, 3])
    })

    it('returns an empty array if all values in array are falsy', () => {
        const array = [0, false, '', null, undefined, NaN]
        expect(compact(array)).toEqual([])
    })
})