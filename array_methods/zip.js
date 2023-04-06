// Creates an array of grouped elements,
// the first of which contains the first elements of the given arrays,
// the second of which contains the second elements of the given arrays, and so on.

// _.zip(['a', 'b'], [1, 2], [true, false]);
// => [['a', 1, true], ['b', 2, false]]

function zip(...arrays) {
    let arr = []; 
    if([...arrays].length === 1){
        return [...arrays]
    }
    if([...arrays].length > 0){
        for (let i = 0, n = 0; i < arrays[1].length; i++) {
            let newArray = []; 
            for (let j = 0; j < arrays.length; j++) {
                newArray[j] = arrays[j][n];
            }
            arr[i] = newArray;
            n += 1;
        }
    }
    return arr;
}

console.log(zip(["a", "b"], [1, 2], [true, false], [3,4]));

module.exports = zip;
