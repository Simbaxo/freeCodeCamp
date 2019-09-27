/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/

/* My Solution */
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  arr = arr.filter(truthyVals)
  return arr;
}

function truthyVals(arg) {
  return (Boolean(arg) === true)
}

bouncer([7, "ate", "", false, 9])

/* FCC Answers
Advanced Code Solution
*/

function bouncer(arr) {
  return arr.filter(Boolean);
}

/* Code Explanation
The Array.prototype.filter method expects a function that returns a Boolean value which takes a single argument and returns true for truthy value or false for falsy value. Hence we pass the built-in Boolean function.
*/
