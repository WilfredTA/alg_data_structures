// Insertion Sort

// Algorithm for insertion sort:

// Given an array, do: 
//Loop 
  // startIdx = 1; 
  //  Store gapIdx = startIdx 
  // tempVal = Remove val at startIdx. . 
  // while (gapIdx is >= the first idx of array) 
    // valLeft = gapIdx - 1; 
    // If valLeft > currentVal 
      //shift valLeft to the right 
      //gapIdx-- 
    //else 
      //insert val at startIdx 
      //break 
    //end 
  ///end while . 
  //startIdx++ 
///end loop

// Implementation:

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
// Insertion sort has 4 types of operations:

// insertion
// deletion
// comparison
// shifting


// Insertion happens at the end of each iteration, therefore, 
//for N elements, it happens N times 

//Removal happens at the beginning of each iteration. 
//Therefore, for N elements, it happens N times 

//Comparison, in a worst case scenario, happens once on the first iteration, 
//twice on the second, up to N-1 iterations. 
//So, for N elements, comparison happens roughly (N^2)/2 times 

//Shifting, in a worst case scenario, happens once on the first iteration, 
//twice on the second, up to N-1 iterations. 
//So, it also happens roughly (N^2)/2 times.

// Summing all of these up, we have: O(N^2) + (2N + 2) algorithmic efficiency for worst case scenario.

// Big-O is concerned with how algorithm time grows as data grows, so constants are negligent. 
// Therefore, this can be simplified to O(N^2) + N.

// Big-O also only regards the highest factor of N, since, as N increases, the highest power to which N is raised will affect the efficiency the most. Therefore, the time complexity of insertion sort in a worst case scenario can be simplified even further: O(N^2).