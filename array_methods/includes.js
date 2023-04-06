// Checks if value is in collection. 
// If collection is a string, it's checked for a substring of value, 
// otherwise SameValueZero is used for equality comparisons. 
// If fromIndex is negative, it's used as the offset from the end of collection.

// _.includes([1, 2, 3], 1);
// // => true
 
// _.includes([1, 2, 3], 1, 2);
// // => false
 
// _.includes({ 'a': 1, 'b': 2 }, 1);
// // => true
 
// _.includes('abcd', 'bc');
// // => true

function includes(collection, value, fromIndex=0){ 
    if(typeof collection === "string"){ 
        if(collection.match(value) !== null){
            return true
        }
    } 
    if(typeof collection === "object" && collection.constructor !== Array){
        for (const i in collection) { 
            return (collection[fromIndex] === value) 
        }
    }
    for (let i = fromIndex; i < collection.length; i++){ 
        return collection[i] === value
    } 
}

console.log(includes({ name: "John", age: 25 }, 25, undefined));
module.exports = includes;