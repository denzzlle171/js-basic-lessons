'use strict';

/**
 * @param {number} price
 * @param {number} balance
 * @return {boolean}
 */
function canBuyProduct(price, balance) {
     return (balance - price >= 500)   
  }
  


// examples
console.log(canBuyProduct(100, 600)); // ===> true
console.log(canBuyProduct(150, 600)); // ===> false
canBuyProduct(1000, 1290); // ===> false