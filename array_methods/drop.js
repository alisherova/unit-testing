// Creates a slice of array with n elements dropped from the beginning.

// _.drop([1, 2, 3]);
// // => [2, 3]
 
// _.drop([1, 2, 3], 2);
// // => [3]
 
// _.drop([1, 2, 3], 5);
// // => []
 
// _.drop([1, 2, 3], 0);
// // => [1, 2, 3]

function drop(array, n = 1){ 
    let newArray = [] 
      if(n > 0){
        for(let i = n, e = 0; i < array.length; i++){
            newArray[e] = array[i]
            e+=1  
        }
        return newArray;
    } 
    return array 
}

// drop([1, 2, 3, 4, 5], 3);
console.log(drop([1, 2, 3, 4, 5], 3));

module.exports = drop; 