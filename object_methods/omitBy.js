// The opposite of _.pickBy; 
// this method creates an object composed of the own and inherited enumerable string keyed properties of object that predicate doesn't return truthy for. 
// The predicate is invoked with two arguments: (value, key).

// var object = { 'a': 1, 'b': '2', 'c': 3 };
 
// _.omitBy(object, _.isNumber);
// => { 'b': '2' }

function predicate(type,value){
    let t = typeof value;
    switch(type){
        case '_.isNumber': return t === 'number' 
        case '_.isString': return t === 'string'   
        case '_.isUndefined': return t === 'undefined' 
        default: return {};
    }
}

function omitBy(object, prop) {
    let result = {}
    for( key in object) {
        if(!predicate(prop, object[key])){
            result[key] = object[key]
        }
    }
    return result
}

omitBy({ 'a': 1, 'b': '2', 'c': 3 }, '_.isString');
module.exports = omitBy;



























