function chunk(array, size = 1) {
  
  let result = [];
  let i, j, chunk;
  for (i = 0, j = 0; i < array.length; i += size, j++) {
      chunk = new Array(size);
    for (let k = 0; k < size && i + k < array.length; k++) {
      chunk[k] = array[i + k];
    }
    result[j] = chunk;
} 

return result;
}

chunk([1,2,3])

module.exports = chunk;

