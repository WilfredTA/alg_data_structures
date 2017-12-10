const map = (array, currentIdx, callback) => {
  if (currentIdx > array.length -1){
   return array; 
  }
  
  array[currentIdx] = callback(array[currentIdx]);
  
  array = map(array, currentIdx+1, callback);
  
};


let array = [1,2,3];

map(array, 0, function(el) { return el*2});

console.log(array);