// Alternative version of quicksort 
// using a different partitioning algorithm.

// Algorithm for partitioning:
// set left = -1
// set right = 0
// set pivot = array.length - 1

// Loop while right < pivot
// if el at position of right <= el at position of pivot
  // left++
  // swap el at left and el at right
// right ++
// end loop
// swap el to the immediate right of left (el at index left+1)
// with the pivot element



const quicksort = (array) => {
  
  if (array.length < 2) return array;
  
 let [left, right, pivot] = [-1, 0, array.length -1];
 
 while (right < pivot) {
  if (array[right] <= array[pivot]) {
   left++;
   [array[left], array[right]] = [array[right], array[left]];
  }
   right++
 }
  [array[left+1], array[pivot]] = [array[pivot], array[left+1]];
  
  let leftArr = array.slice(0, left+1);
  let rightArr = array.slice(left+2);
  let center = array[left+1];
  
  return [...quicksort(leftArr), center, ...quicksort(rightArr)];
}


console.log(quicksort([1,4,3,7,5,9,2]));

// q