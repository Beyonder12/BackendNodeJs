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
  let strLength = str.length;
  let indexFirstBracketFound = str.indexOf("(") ;
  let charAfterFirstBracket = str[indexFirstBracketFound + 1];
  let indexClosingBracketFound = str.indexOf(")");
  if(strLength === 0 || indexFirstBracketFound === -1 || !charAfterFirstBracket || indexClosingBracketFound === -1) return '';
  // console.log('indexFirstBracketFound', indexFirstBracketFound+1, 'indexClosingBracketFound', indexClosingBracketFound)
  return str.split('').slice(indexFirstBracketFound+1, indexClosingBracketFound).join('');

}

// Testing
console.log("aa((bc) --> ", findFirstStringInBracketRefactoring("aa((bc)")); //(bc
console.log("(abc)) --> ", findFirstStringInBracketRefactoring("(abc))")); //abc
console.log("abc)) --> ", findFirstStringInBracketRefactoring("abc))")); //""
console.log("(abc --> ", findFirstStringInBracketRefactoring("(abc")); //""


a = 'abc'
a = a.substr(0,2)
console.log(a)
