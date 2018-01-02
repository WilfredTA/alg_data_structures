### Notes on running time
One way to think about running time:

If we were to use a debugger to walk through each primitive operation in an implementation of this algorithm, how many steps will the debugger take?

How does the number of steps grow in relation to `n`, or the number of integers in the given input array.

## Analysis of mergeSort
First, let's analyze the subroutine of mergeSort: merge()

###Merge:
Input: sorted arrays C and D of length n/2
Assumption: n is even
Output: Sorted merged array B
```
	i := 0
	j := 0
	for k := 0 to n do
		if C[i] < D[j] then
			B[k] = C[i]
			i += 1
		else
			B[k] = D[j]
			j += 1
```

On lines 1 and 2 are simple initialization: count these as 2 primitive operations.

the for-loop executes a total of n times. Each iteration of the loop performs the following actions:
	1. comparison on line 4
	2. assignment on lines 5 or 8
	3. increment on lines 6 or 9
	4. increment of k

Totaling up the primitive operations that merge() takes, we find it is:
4n + 2 to merge two sorted arrays of n/2 length each.

n <= 4n + 2 <= 6n

The above inequality is true because:
1. 4n < 4n + 2
2. 4n + 2 > 5n (replace n with 1 to see)
3. 4n + 2 <= 6n (replace n with 1 to see equality, and with 2 to see 6n > 4n + 2)

Lemma 1: For every pair of sorted input arrays C, D of length n/2, the Merge subroutine performs at most 6n operations


Merge sort recursively divides the array in half and then performs three operations on it: it makes two recursive calls and then performs a merge operation on them. If we ignore work to be done later by recursive calls, the work done by any recursive level of merge sort is simply the work performed by the Merge operation (whose upper bound is 6n).

So, it therefore follows that the total number of operations that merge sort performs on an array of length `n` is equal to 6n times the number of total recursive processes that are called (i.e., at level 0 is the initial invocation of merge sort, which will call merge once. On level 1, there are two recursive processes running, meaning merge will be called twice. At level 2, there are 4 recursive processes running, meaning merge will be called 4 times). 

But n halves each time a new level is created, so, for each level *j*, there are only n/2^*j* elements for each recursive call to work on, and 6n/2^*j* operations for that level:

num of operations done on a single level j= 6n / 2^*j* which can equal, at most 6n since 6n is the upper bound for the number of operations at the first level of the tree with the largest number of elements in the input. So, at most, there are 6n operations at each level of merge sort's recursion.

Therefore, the total number of operations performed by merge sort is eqaul to total number of levels * the number of operations on that level: 

--> 6N * log 2 of (N)
*QED*
