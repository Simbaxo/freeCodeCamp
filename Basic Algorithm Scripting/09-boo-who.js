/*
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/

/* My Solution */
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if (typeof bool === "boolean") {
    // variable is a boolean
    return true
  } else {
    return false
  }
}

booWho(null);

/* FCC Answers
Basic Code Solution
*/

function booWho(bool) {
  return typeof bool === 'boolean';
}

// test here
booWho(null);

/* Code Explanation
Uses the operator typeof to check if the variable is a boolean. If it is, it will return true. Otherwise, if it is any other type it will return false.
*/