// Creates a slice of array excluding elements dropped from the beginning. 
// Elements are dropped until predicate returns falsey. 
// The predicate is invoked with three arguments: (value, index, array).

var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }, 
  ];
   
//   _.dropWhile(users, function(o) { return !o.active; });
//   // => objects for ['pebbles']
   
//   // The `_.matches` iteratee shorthand.
//   _.dropWhile(users, { 'user': 'barney', 'active': false });
//   // => objects for ['fred', 'pebbles']
   
//   // The `_.matchesProperty` iteratee shorthand.
//   _.dropWhile(users, ['active', false]);
//   // => objects for ['pebbles']
   
//   // The `_.property` iteratee shorthand.
//   _.dropWhile(users, 'active');
  // => objects for ['barney', 'fred', 'pebbles']


  function dropWhile(users, func){ 
    if (typeof func === 'function') {
        for (let i = 0; i < users.length; i++) {
          if (!func(users[i])) {
            return users[i];
          }
        } 
      }
    let res = []
    let a = 0;
    for(let i = 0; i < users.length; i++){
        for(el in users[i]){ 
            if(typeof func === "string"){ 
                if(el === func){ 
                    res[a] = users[i] 
                    a++
                    break
                } 
            } 
            if(typeof func === "object" && func.constructor === Array){
                for(let j = 0; j < func.length; j++){ 
                    if(func.length > 1){ 
                        if(el === func[0] && users[i][el] !== (func[1] ?? true)){
                            res[a] = users[i] 
                            a++
                            break
                        } 
                    }
                }
            }
            if(typeof func === "object" && func.constructor !== Array){ 
            
                for(n in func){
                    if( n === el && users[i][el] !== func[n]){ 
                        if(!res.includes(users[i])){
                            res[a] = users[i] 
                            a++
                            break
                        }
                        break 
                    }  
                }
            }
        }
    }
    return res
}

console.log(dropWhile(users, function(o) { return !o.active; }));
module.exports = dropWhile;