function titleCase(str) {
  console.log(str.split(" "));
  let uppercase = str.split(" ");
  let titleCase = uppercase.map((word) => {
    return word[0].toUpperCase();
  })
  console.log(titleCase);
  return titleCase;
}

console.log(titleCase("I'm a little tea pot"));
