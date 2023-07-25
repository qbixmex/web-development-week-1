/*
In this exercise, we will be given an array of 2 or more numbers. 
We will then have to find the two largest numbers in that array, and sum them together.

Instruction
Create a function named sumLargestNumbers that will receive an array of numbers and return the sum of the two largest numbers in that array.
*/

const sumLargestNumbers = function (data) {
  let max1 = -100;
  let max2 = -100;

  data.forEach(element => {
    if (element > max1) {
      max1 = element;
    }
  });

  data.forEach(element => {
    if (element > max2 && element !== max1) {
      max2 = element;
    }
  });

  return max1 + max2;
};


// console.log(sumLargestNumbers([1, 10])); // 11
// console.log(sumLargestNumbers([1, 2, 3])); // 5
// console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // 126

module.exports = sumLargestNumbers;
