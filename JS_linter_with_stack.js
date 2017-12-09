//using a basic stack data structure to implement a simple JS linter


const linter = (string) => {
 let stack = [];
 const openTokens = {'[': true, '{': true, '(': true};
 const closeTokens = {']':true, '}': true, ')': true};
 const pairs = {'[':']', '{':'}', '(':')'};
  
  
 for (let i = 0; i < string.length; i++) {
   if (openTokens[string[i]]) {
     stack.push(string[i]);
   } else if (closeTokens[string[i]]) {
      if (pairs[stack[stack.length - 1]] === string[i]){
       stack.pop();        
      } else {
        console.log("error - closing symbol doesn't match opening symbol");
        return;
      }
   }
   
 };
  
 if (stack.length) {
  console.log("error, opening but no closing braces"); 
   console.log(stack);
   return;
   
 }
  return string  
}


const str1 = "{{hello}}"
const str2 = "{[]} pleerm"
const str3 = "({)}"
const str4 = "((())){}[]"
const str5 = "[helloooo"

console.log(linter(str1));
console.log(linter(str2));
console.log(linter(str3));
console.log(linter(str4));
console.log(linter(str5));