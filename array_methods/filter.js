// Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).

const users = [
    // { 'user': 'barney', 'age': 36, 'active': true },
    // { 'user': 'fred',   'age': 40, 'active': false }
    { name: "John", age: 25, isAdmin: true },
    { name: "Jane", age: 32, isAdmin: false },
    { name: "Jim", age: 40, isAdmin: true },
];

//   _.filter(users, function(o) { return !o.active; });
//   // => objects for ['fred']

//   // The `_.matches` iteratee shorthand.
//   _.filter(users, { 'age': 36, 'active': true });
//   // => objects for ['barney']

//   // The `_.matchesProperty` iteratee shorthand.
//   _.filter(users, ['active', false]);
//   // => objects for ['fred']

//   // The `_.property` iteratee shorthand.
//   _.filter(users, 'active');
//   // => objects for ['barney']

function filter(users, func){ 
    if (typeof func === 'function') {
        for (let i = 0; i < users.length; i++) {
          if (func(users[i])) {
            return users[i];
          }
        } 
      }
    for(let i = 0; i < users.length; i++){
        for(el in users[i]){
            if(typeof func === "string"){
                if(el === func && users[i][el] === true){
                    return users[i]
                } 
            }
            if(typeof func === "object" && func.constructor === Array){
                for(let j = 0; j < func.length; j++){ 
                    if(func.length > 1){ 
                        if(el === func[0] && users[i][el] === (func[1] ?? true)){
                            return users[i]
                        } 
                    }
                }
            }
            if(typeof func === "object" && func.constructor !== Array){ 
                for(n in func){ 
                    if(el === n && users[i][el] === func[n]){
                        return users[i]
                    } 
                }
            }
        }
    }
}

console.log(filter(users, "isAdmin"));

module.exports = filter