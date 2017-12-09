// Selection sort algorithm and implementation

// Selection sort is also of O(N^2) time complexity, 
//but, if you view the file titled "comparison_bubble_sort_selection_sort"
// you will find that selection sort is actually twice as fast as bubble sort

// Algorithm
// Given an array of values:
// Begin at the starting index, and store it as the index of lowest value encountered
// iterate from index at start+1 to the end of the array
// For each element, check if the value < value at index of lowest val encountered
// If it is, store the current val's index as the new lowest val encountered
// After the passthrough, if the index of the lowest val encountered does not equal the starting index,
// swap the value at the starting index with the value at the index of lowest val encountered



const selectionSort = (array) => {

 for (let i = 0; i < array.length; i++) {
   let lowestNumIdx = i;
   
  for (let j = i + 1; j < array.length; j++){
    if (array[j] < array[lowestNumIdx]){
     lowestNumIdx = j;
    }
  }
   
  if (lowestNumIdx !== i) {
   let temp = array[i];
   array[i] = array[lowestNumIdx];
   array[lowestNumIdx] = temp;
  }
 }
  return array;
}


console.log(selectionSort([5,4,3,2,1]));



// Why it's O(N^2)

// There are two kinds of steps: comparisons and swaps
// On the first passthrough for the above array, we make 4 comparisons (N-1)
// On the second passthrough, we make 3 comparisons (N-2)
// So, we always make (N-1) + N(-2)...(N-(N + 1)) or + 1 comparisons.
// We also only make, at most, 1 swap per passthrough
// In a worst case scenario, we make 1 swap per passthrough. (worst case scenario is not descending order)
// So, in a worst case scenario, we make (N-1) + (N-2)+...(N-(N+1)) comparisons plus N - 1 swaps


// With an array of 5 elements:
5-4 + 5-3 + 5-2 + 5-1 = 4 + 3 + 2 + 1 = 10
5 - 1 = 4
10 + 4 = 14

// If we add 5 elements to make it an array of 10 elements, it is clear that
// the max number of steps will not double to 28... We are adding 9 + 8 + 7 + 6 + 5 comparisons
// plus 9 swaps.
// 10 + 9 + 8 + 7 + 6 + 5 + 9 = 54

// The # of steps grows approximately N^2/2 steps (10^2)/2 = 50 and max steps is 54
// 5^2/2 = 12.5 and max number of steps is 14