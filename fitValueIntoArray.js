function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.push(num);
  let sortedArr = arr.sort(function(a, b){
    return a - b;
  })
  return sortedArr.indexOf(num);
}


console.log(getIndexToIns([40, 60], 50));
