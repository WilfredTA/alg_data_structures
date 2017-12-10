##Common Time Complexities and their Explanations

###Basics of Big-O

Big-O is a way to measure the time complexity, or speed, of algorithms. Big-O always considers worst-case scenarios.

O(val) describes how the number of steps increases for a particular operation in a data structure as discrete data units in that data structure increases.


The below time-complexities are the most common to find in big-O notation, and from these primitive time complexities, compound time complexities can be constructed.

###O(1)

Otherwise known as "constant-time". An algorithm that possesses O(1) time complexity, or runs in "constant-time" takes the same number of steps to implement a given operation on a data structure regardless of how much data is present in that data structure.

An example of an O(1) operation on a data structure is: Reading from an array.


This is because, regardless of how many cells are in an array, it always takes just one step to look up the element in the array at index N.

Note that O(1) doesn't mean that the algorithm will always take ONE step. Rather, it means that the algorithm will always take the same number of steps to complete, regardless of how much data is added to the data structure.


###O(N)


O(N) is also known as linear time. An algorithm that runs in linear time is an algorithm for which the steps increase linearly as the amount of discrete data units increase. It does not necessarily mean that the algorithm takes N steps for N data units (although this is linear time as well). Rather, it means thatthe amount of steps will increase linearly as the amount of data increases.


Example: Linear Search of an array

###O(log N)

O(log N) is also known as logarithmic time.

It is assumed that there is a 2 subscript after the "log"

log 8 = 3 because 2^3 = 8

If you have 20 elements, an algorithm of O(log N) will take log(20) steps:

Assuming the algorithm floors all divisions, the algorithm will do this:

20 / 2 = 10
10 / 2 = 5
5 / 2 = 2
2 / 2 = 1

Meaning that an algorithm of time complexity O(log N) will take 4 steps to complete an operation if the data structure operated on has 20 elements.

log N is equal to the number you have to raise 2 to the power of to get N.

Said another way: log N is the number of times you have to divide N by 2 to get 1


An algorithmic with a time complexity of O(log N) will take log N steps for every N data elements

Sasid another way: An algorithm of time complexity O(log N) will take as many steps as it takes to halve the number of data elements until one data element remains...

This may sound familiar to those who have seen binary search in action, because that is exactly what binary search does: for every step binary search takes, it removes roughly half of the data elements in an ordered array (the array must be ordered for binary search to work)



###O(N^2)

Otherwise known as quadratic time. The amount of steps an algorithm takes to complete on a data structure of N elements is roighly N squared.

Algorithms of O(N^2) are not regarded as efficient, nor scalable, since as data grows, they rapidly become computationally expensive.


###Two ways to optimize. First, with big-O for worst case scenarios:

First, optimize for worst-case scenarios, which means bringing your algorithms down to constant time or as close to constant time as possible.

Sometimes this means choosing a different data structure.

E.g., take the following function that runs in quadratic time:

```
function containsDuplicate(array){
	for (var i = 0; i < array.length; i++){
		for(var j = 0; j < array.length; j++){
			if (i !== j && array[i] === array[j]) {
				return true;
			}	
		}
	}
	return false;
}
```
The above function implements the following algorithm:

Given an array of values, iterate over each element in the array.
For each element in the array, iterate over each element in the array.
Compare the current value at the outer index and at the inner index, if the indices are
	not the same, and the values equal each other, return true
After both iterations have completed, return false.

This algorithm is extremely inefficient, because it will always iterate N x N times, or N^2 times, in a worst-case scenario (which would be the case where the array did not have any duplicates, so all elements were iterated over)

We can optimize this to run in linear time in the following way if the input array is an array of numbers:

Given an array of values, initialize a second array.
Iterate over each element in the input array.
Get the value of the current element (number) in the input array.
Check if the value in the second array at that number === undefined.
If it does, insert 1 at that index.
If it doesn't, that means it has already been inserted, so return true.
Return false if iteration completes without returning true

Implementation:
```
function containsDuplicate(array){
	var existingNums = [];
	for (var i = 0; i < array.length; i++){
		if (existingNums[array[i]] === undefined){
			existingNums[array[i]] = 1;
		} else {
			return true;
		}
	}
	return false;
}
```

As you can see, this algorithm only takes N steps for N elements in the array, since there is only one for-loop rather than a nested for-loop.



The above is an example of optimizing in terms of Big-O, or optimizing for worst case scenarios. It guarantees that your algorithms will be okay in worst-cases.


But, the most efficient algorithm according to Big-O is not necessarily the most efficient algorithm in cases that are not worst-case scenarios. Further, two algorithms that run in the same time complexity are not necessarily equally as efficient.

Note that O(N) simply means that the number of steps increases linearly as the number of elements increases linearly. It does NOT mean that the number of steps always === number of elements. One algorithm may increase by 1 step at a constant rate for every 1 element added to the data structure, while another algorithm may increase at a constant rate of 3 steps for every 1 element added to the data structure. Both run in linear time, described by O(N), but one is clearly 3 times as fast.


So, there are actually TWO ways to optimize within the context of big-O. You can optimize for a better time complexity, but then optimize within that time complexity for the most efficient algorithm.

###Second way to optimize: for optimistic scenarios




### Guidelines for recursion

1. Recursion can be used any time a loop can be used
2. Recursion is useful when the same algorithm needs to repeat within its own execution.

Recursive solutions require a base case which is usually a conditional.
Recursive solutions return a value that is used as a parameter for a subsequent call.


#### Example: A recursive solution to Array.prototype.map:

```
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
```

