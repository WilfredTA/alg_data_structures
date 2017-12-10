// Algorithtm for partitioning an array:

// Given an array, do the following:
// set a pivot to the last idx of arr
// Set a left pointer to the first idx of arr
// Set a right pointer to the last idx of arr that isnt the pivot

// Loop
// 	loop
	//	Check if left pointer is < pivot
	//		if true, increment left pointer by 1
	// 		if false, break sub-loop

//  loop
	// check if right pointer is > pivot
	// if true, decrement right pointer by 1
	// if false, break sub loop

// check if left pointer >= right pointer
	// if true, swap left pointer and pivot, and end loop*
	// if false, swap left pointer and right pointer, and continue loop**
// end


const partition = (left, right) => {
  let pivot_position = right
  let pivot = array[pivot_position];
  right = right - 1;
  while (true){
   
    while (array[left] < pivot){
      left++;
    }

    while (array[right] > pivot){
      right--;
    }
    

    if (left >= right){
      let temp = array[left];
      array[left] = pivot;
      array[pivot_position] = temp;
      break;
    } else {
      let temp = array[left];
      array[left] = array[right];
      array[right] = temp;
    }

  }
  return left;
}

console.log(partition([1,2,3,5, 4], 0, 4));

// * arriving at this if condition means that the left pointer
// has already stopped at an element which is greater than pivot
// and that the right pointer has already stopped at an element which is
// less than the pivot.

// What this means is that the element that the left pointer points to
// is where the pivot should be, since all els left to this left pointer
// are less than the pivot, and all els to the right of the left pointer, including
// the el that is at the left pointer, are greater than the pivot. So the pivot
// should be swapped with the el at the position of the left pointer



// ** The reason we do this is that, if it is false that the left pointer >= right pointer,
// it means that both the right pointer has encountered an element less than the pivot
// and that the left pointer has encountered an element greater than the pivot,
// but that there are still other numbers inside the array that have not yet been checked.
// So, we know that the el at left pointer should be to the right of the pivot, and that the el
// at right pointer should be to the left of the pivot. And since we only place the pivot
// in a poisiton wherein all numbers to the left are < pivot and all numbers to the right are > pivot,
// and since that position is where the left pointer surpasses the right pointer, we have to
// swap the left and right elements so that we can continue to move inward into the array
// without compromising our assumption that all elements to the right of the right pointer are
// > the pivot and all elements to the left of the left pointer are < the pivot.




// Algorithm for Quicksort
// if array has 0 or 1 elements, stop;
// First, partition the array and get pivot position // partition method must therefore return pivot position
// quick sort from 0 to pivot position -1
// quick sort from pivot position +1 to end of array


// Walkthrough:

// quicksort [1] => returns immediately for base case
// quicksort[2,1]
	// partition => [1,2]
	// quicksort [2] => returns for base case
	// quicksort undefined => returns for base case


// quicksort [1,3,2]
	// partition => [1,2,3]
	// quicksort [1] => base case
	// quicksort [3] => base case

// quicksort [2,1,4,3]
	// partition => [2,1,3,4]
	// quicksort [2,1]
		//partition => [1,2]
	// quicksort [4] => returns base case
// => [1,2,3,4]

let array = [2,4,9, 8, 3, 1, 7, 6, 5];

const quicksort = (left, right) => {
  if (right - left <= 0){
    return;
  }

  let pivot_position = partition(left, right);

  quicksort(left, pivot_position-1);
  quicksort(pivot_position+1, right);


}

quicksort(0, array.length-1);
console.log(array);