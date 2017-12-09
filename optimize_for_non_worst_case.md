##A better time complexity in worst case scenarios does not mean it is a better-suited algorithm

If you expect the data your application receives to always satisfy the worst-case scenarios of various algorithms, then it is important to choose the algorithm with the most efficient worst case scenario since the worst case scenario will also be the average case scenario.

In comparing two or more algorithms, the one with the most efficient worst case scenario is not necessarily the best choice... What if another algorithm has a far more efficient time complexity for the average case scenario: the scenario which your data will satisfy the majority of the time?



###Example: insertion sort versus selection sort

#### Insertion Sort

Algorithm for insertion sort:

Given an array, do:
Loop
	startIdx = 1;
	Store gapIdx = startIdx
	tempVal = Remove val at startIdx.
	.
	while (gapIdx is >= the first idx of array)
		valLeft = gapIdx - 1;
		If valLeft > currentVal
			shift valLeft to the right
			gapIdx--
		else
			insert val at startIdx
			break
		end
	/end while
	.
	startIdx++
/end loop

Implementation:

```
const insertionSort = (array) => {

  for (let start = 1; start < array.length; start++){

    let gapIdx = start
    let temp = array[start];
    
    while (gapIdx >= 0) {
      if(array[gapIdx -1] > temp) {
       array[gapIdx] = array[gapIdx - 1];
       array[gapIdx - 1] = null;
        gapIdx--;
      } else {
       array[gapIdx] = temp;
       break;
      }
      
    };
    
   
  }
  
  return array;
  
};


console.log(insertionSort([5,4,3,2,1]));
```

Insertion sort has 4 types of operations:
1. insertion
2. deletion
3. comparison
4. shifting

Insertion happens at the end of each iteration, therefore, for N elements, it happens N times
Removal happens at the beginning of each iteration. Therefore, for N elements, it happens N times
Comparison, in a worst case scenario, happens once on the first iteration, twice on the second, up to
	N-1 iterations. So, for N elements, comparison happens roughly (N^2)/2 times
Shifting, in a worst case scenario, happens once on the first iteration, twice on the second, up to
	N-1 iterations. So, it also happens roughly (N^2)/2 times.

Summing all of these up, we have: O(N^2) + (2N + 2) algorithmic efficiency for worst case scenario.

Big-O is concerned with how algorithm time grows as data grows, so constants are negligent. Therefore,
this can be simplified to O(N^2) + N.

Big-O also only regards the highest factor of N, since, as N increases, the highest power to which N is raised will affect the efficiency the most. Therefore, the time complexity of insertion sort in a worst case scenario can be simplified even further:
O(N^2).

Compare that with selection sort, which, in worst case scenarios, performs N^2/2 steps per data element.

#### Selection Sort

Recalling the algorithm for selection sort: 

	 Loop until startIdx = lastIdx of array
	 	set startIdx = 0;
	 	set lowestIdx = startIdx 
	 	set currentIdx = startIdx
	 	while currentIdx <= last index of array
	 		curentIdx++
	 		set currentVal = val at currentIdx
			check: currentVal < val at lowestIdx
				if true, lowestIdx = currentIdx
		/end while
	 
	 check: lowestIdx equal to startIdx?
	 	if false:
	 		set tempVal = val at startIdx
	 		set val at startIdx = val at lowestIdx
	 		set val at lowestIdx = tempVal
	 startIdx++


It is clear that selection sort in a worst case scenario will:

Loop over the array N-1 times, making (N-1) comparisons the first time, (N-2) the second, and so on. In the worst case scenario, we make a swap during each passthrough in the outer loop, and therefore make N-1 swaps as well.

So, we make (N^2)/2 comparisons and N-1 swaps

Notice that no matter what, even if the array is fully sorted, we will make (N^2)/2 comparisons, since the algorithm doesn't stop comparing and there is no guard clause against continuing iteration once the array is sorted.


#### Comparison

So, selection sort will take at least (N^2)/2 times no matter what. However, insertion sort's time complexity varies based on how sorted or unsorted the beginning array is. If it is already semi-sorted, it may take (N^2)/2 steps, and if it is fully sorted, it will only take N steps. Contrast this with selection sort which will take (N^2)/2 steps regardless of whether the array is completely unsorted, semi-sorted, or completely sorted.


