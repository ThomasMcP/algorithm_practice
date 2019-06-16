// REMOVE ALL ELEMENT FROM ARRAY THAT MATCH ARGS
function destroyer(arr) {
  // Remove all the values
  let args = Array.from(arguments).slice(1);
  return arr.filter((item) => !args.includes(item));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // SHOULD RETURN [1, 1]
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)); // [1, 5, 1]
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")); //[12, 92, 65]
