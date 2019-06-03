function factorialize(num) {
  let count = num - 1;
  while (count > 0) {
    num *= count;
    count--;
  }
  if (num === 0){
    return 1;
  }
  else return num;
}

console.log(factorialize(0));
