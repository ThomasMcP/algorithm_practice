function translatePigLatin(str) {
  const consonantRegex = /^[b-df-hj-np-tv-z]+/i
  // if begins with consonant or consonant cluster, take consonant/s and add to end of word.
  if (str.search(consonantRegex) === 0) {
    // saves match or matches into variable
    let match = consonantRegex.exec(str);
    // add to end of word + "ay"
    return str.replace(consonantRegex, "") + match[0] + "ay";
  } else {
    // does not begin with consonant - add "way" to end of string.
    return str.concat("way");
  }
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("Thomas"));
