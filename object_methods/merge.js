// This method is like _.assign except that it recursively merges own and inherited enumerable string keyed properties of source objects into the destination object.
//  Source properties that resolve to undefined are skipped if a destination value exists. Array and plain object properties are merged recursively.
// Other objects and value types are overridden by assignment. Source objects are applied from left to right.
//  Subsequent sources overwrite property assignments of previous sources.

var object = {
  a: [{ b: 2 }, { d: 4 }],
};

var other = {
  a: [{ c: 3 }, { e: 5 }],
};

// _.merge(object, other);
// => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }

function merge(obj1, obj2) {
  let result = {};
  for (var key in obj1) {
    result[key] = obj1[key];
    for (var key2 in obj2) { 
      if (key === key2) {  
        result[key] = [ ...obj1[key] , ...obj2[key2]]; 
        return result;
      } else{
        result = {
          ...obj1,
          ...obj2,
        };
        return result;
      }
    }
  }
  return result;
}
console.log(merge(object, other));

module.exports = merge;
