// Both bubble sort and selection sort run in quadratic time.
// But, as I will demonstrate, selection sort is twice as fast.


// Algorithm for Bubble Sort


//
// 	Given an array of numbers, point to the first two items in the array.
// 	If the left item is greater than the right item, swap them.
// 	Move each counter to the right by 1 cell
//  Repeat until end of array or we reach items that have already been sorted
// 	Repeat above steps until a passthrough is completed in which no swaps were made


function bubbleSorts(array) {
  var item1;
  var item2;
  var sortedUntil = array.length - 1;
  var count = 0;
  var sorted = false;

while (sortedUntil > 0 && !sorted) {
  sorted = true;

    for (var i = 0; i < sortedUntil; i++){
      item1 = array[i];
      item2 = array[i+1];

      if (item1 > item2){
        sorted = false;
        array[i] = item2;
        array[i+1] = item1;
        count++;
      }

      count++;
        
    }

  sortedUntil--;

}
console.log(count);
return array;
}

console.log(bubbleSorts([3,2,1]));

// Essentially, after each iteration of the while loop, we can be certain that the
// value at index of sortedUntil is where it belongs, so, we iterate up to sortedUntil index each time.
// We only do this, however, if sorted is false. If sorted is true, then we don't even bother. And sorted is set
// to true at the start of each iteration, meaning it is only set to false if we end up swapping.


// Notice that count is incremented once inside the if-conditional and once outside the if-conditional.
// This is because, inside the if-conditional, a swap occurs. Outside the if-conditional, a comparison occurs.
// Since swaps and comparisons are two different types of operations, and are the primary operations of this
// algorithm, we need to count the occurrence of either one of them.







// Why it's O(N^2)

// As each element is added, the number of steps increase, as does the number by which the number of steps increases.
// the number of steps added when adding a fifth element is less than the number of steps
// added when adding a sixth element. In other words, as the number of elements increases, not only
// does the number of steps increase, but the number by which the number of steps increase also increases.

// To demonstrate:

// check the value of count as you increment the number of elements:

// N elements | # of steps in algorithm | N^2
// 5          | 20						| 25
// 10		  | 90						| 100
// 20		  | 380						| 400


// As you can see, the # of steps taken in bubble sort increases roughly by N^2.
// Even though it is not exactly N^2 steps, the number of steps for N elements
// is always (N^2 - N) in a worst case scenario.

// (don't believe me? try this...)
// 17^2 = 289
// 289 - 17 = 272
// bubble_sort([17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1])

// count will be logged as 272



