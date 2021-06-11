/*
 Logic Test
 Anagram is a term where a string if shuffle will be same. example
 'aku' and 'kua' is anagram. simply, anagram is 2 string with same length
 and count of each char.


 input = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']

 the output of the input array above

 output = [
   ['kita', 'atik', 'tika'],
   ['aku', 'kua'],
   ['makan'],
   ['kia']
 ]
 */

 function anagramGroup(input) {
   let res = []
   for(let i = 0; i < input.length; i++) {
     let subArray = [];
     if(input[i]) subArray.push(input[i])
    //  console.log(input[i], subArray)
    //  break;
     for(let j = i+1; j < input.length; j++) {
        if(input[i] && input[j] && isAnagram(input[i], input[j])) {
          subArray.push(input[j]);
          input[j] = null;
        }
     }
     if(subArray[0]) res.push(subArray);
   }
   return res;
 }

 //Testing sample
 console.log(anagramGroup(['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']))
 /*
 [
  [ 'kita', 'atik', 'tika' ],
  [ 'aku', 'kua' ],
  [ 'kia' ],
  [ 'makan' ]
]
*/

console.log(anagramGroup(['aaa', 'aaa', 'bb', 'bbb', 'bbb', 'cd', 'dc'])) //[ [ 'aaa', 'aaa' ], [ 'bb' ], [ 'bbb', 'bbb' ], [ 'cd', 'dc' ] ]

 function isAnagram(arr1, arr2) {
   let sumCharCodeArr1 = 0, sumCharCodeArr2 = 0;
   for(let c of arr1) sumCharCodeArr1 += c.charCodeAt();
   for(let c of arr2) sumCharCodeArr2 += c.charCodeAt();

   return sumCharCodeArr1 === sumCharCodeArr2 ? true : false;
 }



//isAnagram Testing
console.log(isAnagram('edcb', 'abcde')); //false
console.log(isAnagram('abcde', 'abcde')); //true
console.log(isAnagram('cdbae', 'abcde')); //true

// console.log('abcde' === 'bcdea')
