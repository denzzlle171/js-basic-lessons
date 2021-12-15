'use strict';

/**
 * @param {number} minutes
 * @param {number} seconds
 * @param {number} mills
 * @return {number}
 */
// varian #1
// function convertMills(minutes, seconds, mills) {
//   return  (minutes * 60 * 1000) + (seconds * 1000) + mills
// }
// varian #1 (arrow)
let convertMills = (minutes, seconds, mills) =>
     (minutes * 60 * 1000) + (seconds * 1000) + mills


// examples
console.log(convertMills(1, 2, 100)); // ===> 62100
convertMills(0, 2, 100); // ===> 2100
convertMills(5, 11, 230); // ===> 311230