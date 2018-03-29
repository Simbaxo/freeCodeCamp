// Using While Loop
function factorialize(num) {
  let answer = 1;
  while(num > 1) {
    answer *= num;
    num--;
  }
  return answer;
}

console.log(factorialize(5));

// Using Recursion

let answer = 1;
function factorialize(num) {
  answer *= num; //5
  num--; //4
  if(num > 1) {
    factorialize(num);
  }
  return answer;
}

console.log(factorialize(5));
