'use strict';

let input = prompt("Enter a palindrome");
input = input.toLowerCase();
const length = Math.floor(input.length); 

let isPalindrome = true;
for (let i = 0; i < length/2; i++) {
  if (input.charAt(i) !== input.charAt(length - 1 - i)) { 
      isPalindrome=false;
      break;
  }
}
console.log(`${input} is${(isPalindrome)? "" : " not"} a palindrome`);