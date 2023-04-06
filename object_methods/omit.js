// The opposite of _.pick; 
// this method creates an object composed of the own and inherited enumerable property paths of object that are not omitted.

let object = { 'a': 1, 'b': '2', 'c': 3 };
 
// _.omit(object, ['a', 'c']);
// => { 'b': '2' }

function omit(obj, keys) {
    let result = {};
    for (let key in obj) {
      let flag = true;
      for (let i = 0; i < keys.length; i++) {
        if (key === keys[i]) {
          flag = false;
          break;    
        }
      }
      if (flag) {
        result[key] = obj[key];
      }
    }
    return result;
  }

console.log(omit(object, ['a', 'c']));

module.exports = omit;