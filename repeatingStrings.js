function repeatStringNumTimes(str, num) {
  // repeat after me
  let repeatedString = "";
  if (num < 0) {
    return repeatedString;
  }
  while (num > 0) {
    repeatedString += str;
    num--
  }
  return repeatedString;
}

console.log(repeatStringNumTimes("abc", -1));
