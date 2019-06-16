// function LetterChanges(str) {
//
//   // code goes here
//   let seperate = str.split(" ");
//   for (var i = 0; i < seperate.length; i++) {
//     let newString = "";
//     if (seperate[i].match(/./g){
//       newString+=String.fromCharCode(str.charCodeAt(i)+1);
//     }
//     return newString;
//   }
//   // let newWords = seperate.map((word) => {
//   //   return word.charAt(0).toUpperCase() + word.slice(1);
//   // })
//
//
//   return newWords;
// }

function CaesarCipher(str,num) {
  var newStr="";
  for (var i=0; i<str.length; i++) {
    var letter=str[i];
    if (letter.match(/[a-z]/i)) {
      newStr+=String.fromCharCode(str.charCodeAt(i)+num);
    }
    else {
      newStr+=str[i];
    }
  }
  return newStr;
}

function capitaliseFirstAndVowels(str) {
  let newString = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i].match(/aeiou/i)) {
      console.log(str[i]);
    }
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(CaesarCipher( "fun times!",1));
console.log(capitaliseFirstAndVowels(CaesarCipher( "fun times!",1)));


// keep this function call here
// console.log(LetterChanges("fun times!"));
