// Check if a string (first argument, str) ends with the given target string (second argument, target).

/* My Solution */
function confirmEnding(str, target) {
  // substring returns part of the string
  // checking the length of the string - the length of the target
  const newStr = str.substring(str.length - target.length)
  if (newStr === target) {
    return true
  } else {
    return false
  }
}

confirmEnding("Bastian", "n");
confirmEnding("Congratulation", "on")

/* FCC Answers
Intermediate Code Solution
*/

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return str.slice(str.length - target.length) === target;
}

confirmEnding("He has to give me a new name", "name");

/* Code Explanation
First we use the slice method copy the string.

In order to get the last characters in str equivalent to the target’s length we use the slice method.

The first parameter inside the slice method is the starting index and the second parameter would be the ending index.

For example str.slice(10, 17) would return give me.

In this case we only include one parameter which it will copy everything from the starting index.

We substract the length of str and the length of target, that way, we shall get the last remaining characters equivalent to the target’s length.

Finally we compare the return result of slice to target and check if they have the same characters.
*/