// Creates a slice of array with n elements taken from the beginning.

// _.take([1, 2, 3]);
// // => [1]
 
// _.take([1, 2, 3], 2);
// // => [1, 2]
 
// _.take([1, 2, 3], 5);
// // => [1, 2, 3]
 
// _.take([1, 2, 3], 0);
// // => []

function take(array, n = 1){ 
    let newArray = [] 
    if(n > array.length) return array;
    if(n > 0){
        for(let i = 0, e = 0; i < n; i++){
            newArray[e] = array[i]
            e+=1  
        }
        return newArray;
    } 
    return array 
}

console.log(take([1, 2, 3], 5));
module.exports = take
