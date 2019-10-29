// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  // Break it up.

  return arr.slice(0, size)

}

console.log(
  chunkArrayInGroups(["a", "b", "c", "d"], 2)
)