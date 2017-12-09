// Recall that bubble sort and selection sort run in the same time complexity of O(N^2)
// Still, selection sort is twice as fast

// For bubble sort, in a worst case scenario there are (N-1) + (N-2)+... 1 comparisons AND
// The SAME number of swaps (in the event that the array is in descending order)

// For selection sort, in a worst case scenario, there are (N-1) + (N-2) +...1 comparisons as well.
// But, there is at most only one swap per passthrough, and there are at most N-1 swaps per
// execution. 


// The number of steps in each algorithm grows exponentially and both run in quadratic time.
// However, selection sort makes significantly less swaps than bubble sort.
// While bubble sort takes roughly N^2 steps in a worst case scenario, selection sort
// takes roughly N^2/2 steps in a worst case scenario