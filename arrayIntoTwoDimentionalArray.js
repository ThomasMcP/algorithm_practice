function chunkArrayInGroups(arr, size) {
  let twoDem = [];
  for (var i = 0; i < arr.length; i + 2) {
    twoDem.push(arr[i]);
  }
  return twoDem;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
