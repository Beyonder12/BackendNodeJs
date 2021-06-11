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
   for(let i = 0; i < input.length; i++) {
     for(let j = 0; j < input.length; j++) {

     }
   }
 }

 function isAnagram(arr1, arr2) {
   let sumCharCodeArr1 = 0, sumCharCodeArr2 = 0;
   for(let c of arr1) c.charCodeAt();
   for(let c of arr2) c.charCodeAt();

   return sumCharCodeArr1 === sumCharCodeArr2 ? true : false;
 }

// isAnagram('abcde')
