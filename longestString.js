function findLongestWordLength(str) {
  const split = str.split(" ");
  let longest = 0;
  for (let i = 0; i < split.length; i++) {
    if (split[i].length > longest) {
      longest = split[i].length;
    }
  }
  return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog ");
