function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let copyArr2 = arr2.slice(0);
  copyArr2.splice(n, 0, ...arr1);
  return copyArr2;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

// You are given two arrays and an index.
//
// Use the array methods slice and splice to copy each element of the first array into the second array, in order.
//
// Begin inserting elements at index n of the second array.
//
// Return the resulting array. The input arrays should remain the same after the function runs.
//
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
