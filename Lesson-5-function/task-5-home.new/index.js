//  function min(firstNumber, secondNumber) {

//     if (firstNumber < secondNumber){
//         return firstNumber }
//     else{
//         return secondNumber;
//     }
//   }

//   console.log(min(100, 40));
//   console.log(min(30, 50));

'use strict';

/**
 * @param {number} first
 * @param {number} second
 * @param {number} third
 * @return {number}
 */
function getMax(first, second, third) {
  let max;
  if (first > second) {
    max = first;
  } else {
    max = second;
  }
  if (max > third) {
    return max;
  } else {
    return third;
  }
}

// examples
console.log(getMax(10, 20, 30)); // ===> 30
console.log(getMax(100, 20, 30)); // ===> 100
console.log(getMax(0, 0, 0)); // ===> 0
