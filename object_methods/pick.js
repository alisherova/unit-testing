// Creates an object composed of the picked object properties.

var object = { 'a': 1, 'b': '2', 'c': 3 };
 
// _.pick(object, ['a', 'c']);
// => { 'a': 1, 'c': 3 }

function pick(object, paths) {
    let result = {} 
    for(key in object) {
        for(let i = 0; i < paths.length; i++) {
            if(key === paths[i]) {
                result[key] = object[key];
            }
        }
    }
    return result;
}

console.log(pick(object, ['a', 'c']));

module.exports = pick;