function findLongestWord(str) {
  let longestWord = 0;
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    if (str[i].length > longestWord) {
      longestWord = str[i].length;
    }
  }
  return longestWord;
}

console.log(
  findLongestWord("The quick brown fox jumped over the lazy dog"));