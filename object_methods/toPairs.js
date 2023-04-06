// Creates an array of own enumerable string keyed-value pairs for object which can be consumed by _.fromPairs.
// If object is a map or set, its entries are returned.

// function Foo() {
//     this.a = 1;
//     this.b = 2;
// }

// Foo.prototype.c = 3;

//   _.toPairs(new Foo);
// => [['a', 1], ['b', 2]] (iteration order is not guaranteed)

function toPairs(obj) {
    const pairs = [];
    let i = 0;
    for (const key in obj) {
      if (obj[key]) {
        pairs[i] = [key, obj[key]];
        i++;
      }
    }
    return pairs;
  }
  
  function Foo() {
    this.a = 1;
    this.b = 2;
  }
   
  Foo.prototype.c = 3;
   
  console.log(toPairs(new Foo));
  // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
  
module.exports = toPairs;