/*
Given an array of strings, return a new array where the strings are sorted to the highest number of 
adjacent consonants a particular string contains. If two strings contain the same highest number of 
adjacent consonants they should retain their original order in relation to each other. Consonants are 
considered adjacent if they are next to each other in the same word or if there is a space between two 
consonants in adjacent words.

Input: Array of strings

Output: New array of strings sorted in order of most adjacent consonants

Explicit Rules:
IF two strings have same number of adjacent consonants then same order
Consonants are adjacent if they are next to eachother in same word or there is a space between them.

Implicit rules:
Strings can contain multiple consonants


What id there is an empty array?
Which order should they be sorted? Should be sorted from most to least
What is a consonant?
Are upper and lower case letters considered equal?
Can strings contain no adjacent consonants?
Can strings be empty? Assume that they can not
What is an adjacent consonant? If the letter before or after a consonant is also a consonant.


console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']


D ata structures:
New array to store ordered elements in


A lgorithm:

Function: numAdjacentConsonants: input: inputStr
  Remove spaces from inputStr
  set maxAdjConsonants to zero
  currentConsecutiveConsonants to zero
  Loop over elements of inputStr
    if element is consonant 
      add one to currentConsecutiveConsonants
      if currentCOnsecutiveConsonants is greater than maxAdjConsonants: maxAdj reassigned to currentConsecutive
    else current consecutveConsonants to zero
  return maxAdjConsonants

create empty array : returnArray
loop through elements of inputArr:
  set adjConsonants to number of adjacent consonants of element
  Set indexToAdd to length of returnArray
  Loop through index values of return array
    if element at index has less adjacent consonants then set indexToAdd to index
  add element to returnArray at indexToAdd

[]

*/


function removeWhiteSpace(str) {
  let whiteSpaceRe = /\s/gi;

  let outputStr = str.replaceAll(whiteSpaceRe, "");

  return outputStr;
}

function isConsonant(char) {
  let vowels = ["a", "e", "i", "o", "u", "y"];

  return (!vowels.includes(char));
}

function numAdjacentConsonants(inputStr) {
  inputStr = removeWhiteSpace(inputStr);

  let maxAdjConsonants = 0;
  let curConsecConsonants = 0;

  for (let char of inputStr) {
    if (isConsonant(char)) {
      curConsecConsonants += 1

      if (curConsecConsonants > maxAdjConsonants) {
        maxAdjConsonants = curConsecConsonants;
      }
    } else {
      curConsecConsonants = 0;
    
    }
  }
  
  if (maxAdjConsonants === 1) {
    maxAdjConsonants = 0;
  }

  return maxAdjConsonants;
}


function sortStringsByConsonants(inputArr) {
  let returnArray = [];

  for (let str of inputArr) {
    let adjConsonants = numAdjacentConsonants(str);
    let indexToAdd = returnArray.length;

    for (let i = 0; i < returnArray.length; i++){
      if (numAdjacentConsonants(returnArray[i]) < adjConsonants) {
        indexToAdd = i;
        break;
      }
    }
    console.log(`str:${str}, returnArr: ${returnArray}, adjc: ${adjConsonants} indextoadd: ${indexToAdd}, `)
    returnArray.splice(indexToAdd, 0, str);
  }

  return returnArray;
}




console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']


console.log(numAdjacentConsonants("salt pan"))