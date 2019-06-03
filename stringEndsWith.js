function confirmEnding(str, target) {
  if (str[str.length - 1] === target) {
    return true;
  } else return false;
}

console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
