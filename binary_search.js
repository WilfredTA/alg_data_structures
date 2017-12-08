function binarySearch(array, val){
  //get midpoint of arr
  // if val at midpoint < val
  // eliminate midpoint and up
  // else if val at midpoint < val
  // eliminate midpoints and down
  // else if val at midpoint === val
  // return true
  // else return false
  // stop condition: if two adjacent cells and left is < val and right > val
  
  var midpoint;
  var lowerBound = 0;
  var upperBound = array.length -1;
  var count = 0;
  
  while (lowerBound <= upperBound) {
   midpoint = Math.floor(((lowerBound + upperBound) / 2));
    count++
    console.log(count);
  
   var valAtMid = array[midpoint];
    
    
   if (val < valAtMid) {
    upperBound = midpoint - 1;
     
   } else if (val > valAtMid) {
    lowerBound = midpoint + 1; 
     
   } else if (valAtMid === val) {
    return val; 
   }
  }
  
  return null;
  
}


var array = [1,3,8,18,24,46, 62, 74, 78, 89, 92, 93, 98, 102, 110];

console.log(binarySearch(array, 98));
