// Creates an object composed of the object properties predicate returns truthy for. 
// The predicate is invoked with two arguments: (value, key).

var object = { 'a': 1, 'b': '2', 'c': 3 };
 
// _.pickBy(object, _.isNumber);
// => { 'a': 1, 'c': 3 }

function predicate(type,value){
    let t = typeof value;
    switch(type){
        case '_.isNumber': return t === 'number' 
        case '_.isString': return t === 'string'  
        case '_.isUndefined': return t === 'undefined'
        default: return {};
    }
}

function pickBy(object, prop) {
    let result = {}

    for(key in object) {
        if(predicate(prop, object[key])){
            result[key] = object[key];
        }
    }
    return result;
}

pickBy(object, "_.isNumber")

module.exports = pickBy;