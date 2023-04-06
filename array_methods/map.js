// Creates an array of values by running each element in collection thru iteratee. The iteratee is invoked with three arguments:
// (value, index|key, collection).

// function square(n) {
//     return n * n;
//   }

//   _.map([4, 8], square);
//   // => [16, 64]

//   _.map({ 'a': 4, 'b': 8 }, square);
//   // => [16, 64] (iteration order is not guaranteed)

var users = [{ user: "barney" }, { user: "fred" }];

//   // The `_.property` iteratee shorthand.
//   _.map(users, 'user');
//   // => ['barney', 'fred']

function square(n) {
  return n * n;
}

function map(collection, iteratee) {
  let n = 0;
  let newArray = [];
  for (el in collection) {
    newArray[n] =
      typeof iteratee === "string"
        ? collection[el][iteratee]
        : iteratee(collection[el]); 
    n += 1;
  }
  return newArray;
}

console.log(map(users, "user"));

module.exports = map;
