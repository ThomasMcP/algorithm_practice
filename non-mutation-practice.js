// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function add (booklist, bookName) {
    let arrayOfBooks = booklist.slice(0, bookList.length);
    arrayOfBooks.push(bookName);
    return arrayOfBooks;

  // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// multiples not handled.
// Add your code below this line
function remove (booklist, bookName) {
  let arrayOfBooks = booklist.slice(0, bookList.length);
  if (arrayOfBooks.includes(bookName)) {
    arrayOfBooks.splice(arrayOfBooks.indexOf(bookName), 1);
    return arrayOfBooks;
    // Add your code above this line
  }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

// console.log(bookList);
// console.log(bookList);
console.log(newBookList);
console.log(newerBookList);
console.log(newestBookList);
