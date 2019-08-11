/*
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.
*/

/* My Solution */
function findElement(arr, func) {
  // filter takes array and makes a new array that passes the test
  let num = arr.filter(func)
  // return first argument of filtered array num
  if (num.length > 1) {
    return num[0]
  } else {
    return undefined;
  }
}

findElement([1, 2, 3, 4], num => num % 2 === 0)

/* FCC Answers
Basic Code Solution
*/

function findElement(arr, func) {
  let num = 0;

  for(var i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}

/* Code Explanation
Challenge asks us to look through array. This is done using a for loop.
The num variable is being passed into the function, so we set it to each index in our array.
The pre-defined function already checks each number for us, so if it is “true”, we return that num.
If none of the numbers in the array pass the function’s test, we return undefined.
*/