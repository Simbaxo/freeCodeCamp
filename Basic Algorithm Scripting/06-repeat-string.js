// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

/* My Solution */
function repeatStringNumTimes(str, num) {
  // repeat after me
  // Array.join() puts the arguments between the array elements so I added 1 to num
  let newNum = num + 1
  if (num < 0) {
    return ""
  } else {
    // empty array with length of parameters
    return Array(newNum).join(str)
  }
}

repeatStringNumTimes("abc", 3);

/* FCC Answers
Basic Code Solution
*/

function repeatStringNumTimes(str, num) {
  var accumulatedStr = '';

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }

  return accumulatedStr;
}

/* Code Explanation
Create an empty string variable to store the repeated word.
Use a while loop or for loop to repeat code as many times as needed according to num
Then we just have to add the string to the variable created on step one, and increase or decrease num depending on how you set the loop.
At the end of the loop, return the variable for the repeated word.
*/

/* FCC Answers
Intermediate Code Solution
*/

function repeatStringNumTimes(str, num) {
  if (num < 0)
    return "";
  if (num === 1)
    return str;
  else
    return str + repeatStringNumTimes(str, num - 1);
}

/* Code Explanation
This solution uses recursion.
We check if num is negative and return an empty string if true.
Then we check if it’s equal to 1 and in that case we return the string itself.
If not, we add the string to a call of our function with num being decreased by 1, which will add another str and another.. until eventually num is 1. And return that whole process.
*/

/* FCC Answers
Advanced Code Solution
*/

function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : '';
}

repeatStringNumTimes("abc", 3);

/* Code Explanation
This solution takes a declarative approach.
It is similar to the third solution, except it uses the ternary operator form of the if statement
*/