
let selectedValues = [];
const select = (array, currentIdx, callback) => {

  if (currentIdx > array.length - 1){
    return;
  }

  if (callback(array[currentIdx])){
    selectedValues.push(array[currentIdx])
  };

  select(array, currentIdx+1, callback);

}


const array = [1,2,3,4,5,6,7,8,9,10];

select(array, 0, function(el){
  return el % 2 === 0;
})

console.log(selectedValues);