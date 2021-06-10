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

// Testing
console.log(findFirstStringInBracket("aa((bc)")); //(bc
console.log(findFirstStringInBracket("(abc))")); //abc
console.log(findFirstStringInBracket("abc))")); //""
console.log(findFirstStringInBracket("(abc")); //""


// Let's refactoring the code to be better
function findFirstStringInBracketRefactoring(str) {
  if(str.length === 0 || str.indexOf("(") || str[str.indexOf("(") + 1] || str.indexOf(")")) return '';
  // for(let i = str.indexOf("(") + 1; i < str.indexOf(")"); i++) {

  // }
}
