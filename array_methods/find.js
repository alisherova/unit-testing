// Iterates over elements of collection, returning the first element predicate returns truthy for.
// The predicate is invoked with three arguments: (value, index|key, collection)

var users = [
  { user: "barney", age: 36, active: true },
  { user: "fred", age: 40, active: false },
  { user: "pebbles", age: 1, active: true },
];

//   _.find(users, function(o) { return o.age < 40; });
//   // => object for 'barney'

//   // The `_.matches` iteratee shorthand.
//   _.find(users, { 'age': 1, 'active': true });
//   // => object for 'pebbles'

//   // The `_.matchesProperty` iteratee shorthand.
//   _.find(users, ['active', false]);
//   // => object for 'fred'

//   // The `_.property` iteratee shorthand.
//   _.find(users, 'active');
//   // => object for 'barney'

function find(array, predicate) {
    if (typeof predicate === 'function') {
      for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
          return array[i];
        }
      }
    } else if (typeof predicate === 'object' && predicate.constructor !== Array) {
      for (let i = 0; i < array.length; i++) {
        let match = true;
        for (var key in predicate) {
          if (predicate.hasOwnProperty(key) && array[i][key] !== predicate[key]) {
            match = false;
            break;
          }
        }
        if (match) {
          return array[i];
        }
      }
    } else if (typeof predicate === 'object' && predicate.constructor === Array) {
        const key = predicate[0];
      const value = predicate[1];
      for (let i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
          return array[i];
        }
      }
    } else { 
      for (let i = 0; i < array.length; i++) {
        if (array[i][predicate]) {
          return array[i];
        }
      }
    }
    return undefined;
  }
  

  find(users, 'active')
  module.exports = find
