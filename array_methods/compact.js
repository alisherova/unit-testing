// Creates an array with all falsey values removed.
// The values false, null, 0, "", undefined, and NaN are falsey.

// _.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]

function compact(array){
    let newArray = []
    for(let i=0, n = 0; i<array.length;  i++){ 
        if(!!array[i]){
            newArray[n] = array[i]
            n++ 
        }; 
    }
    return newArray
}

compact([0, 1, false, 2, "", 3]);

module.exports = compact