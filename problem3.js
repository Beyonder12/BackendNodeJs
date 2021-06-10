//This problem to refactoring this code

function findFirstStringInBracket(str) {
  if(str.length > 0) {
    let indexFirstBracketFound = str.indexOf("(");
    if(indexFirstBracketFound >= 0) {
      let wordsAfterFirstBracket = str.substr(indexFirstBracketFound);
      if(wordsAfterFirstBracket) {
        wordsAfterFirstBracket = wordsAfterFirstBracket.substr(1);
        let indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")");
        if(indexClosingBracketFound >= 0) {
          return wordsAfterFirstBracket.substr(0, indexClosingBracketFound);
        } else {
          return "";
        }
      } else {
        return "";
      }
    } else {
      return "";
    }
  } else {
    return "";
  }
}

console.log(findFirstStringInBracket("aa((bc)")); //(bc
console.log(findFirstStringInBracket("(abc))")); //abc


// Let's refactoring the code to be better
