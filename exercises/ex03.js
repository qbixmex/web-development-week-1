/*
In this exercise, we will be counting the number of vowels that appear in a given string. 
For this exercise, consider the following to be vowels: a, e, i, o, and u.

Instruction
Create a function named numberOfVowels that will receive a string and return the number of vowels in that string.

*/

const numberOfVowels = function (data) {
  const vowels = ["a", "e", "i", "o", "u"];
  const dataArray = [];
  let count = 0;

  
  for (character of data) {
    dataArray.push(character);
  }

  vowels.forEach(vowel => {
    dataArray.forEach(character => {
      if (vowel === character) {
        count++;
      }
    });
  });

  return count;
};

// console.log(numberOfVowels("orange")); // 3
// console.log(numberOfVowels("cornerstone college")); // 7
// console.log(numberOfVowels("aeiou")); // 5

module.exports = numberOfVowels;
