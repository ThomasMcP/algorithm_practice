// SEARCH ARRAY AND RETURN OBJECTS WHERE OBJECT MEETS SEARCH ARGUMENT! // NOT FINISHED!!
function whatIsInAName(collection, source) {
  // What's in a name?
  let arr = [];
  let keys = Object.keys(source);
  console.log(keys);
  for (let i = 0; i < collection.length; i++) {
    for (var j = 0; j < keys.length; j++) {
      if ( collection[i][`${keys[j]}`] === source[`${keys[j]}`] ) {
        arr.push(collection[i]);
      }
    }
  }
  return arr;
}

// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
// console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }));
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
