/**
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @return {number}
 */
 function min(firstNumber, secondNumber) {
     let min;
    if (firstNumber < secondNumber){
        min = firstNumber }
    else{
        min = secondNumber;
    }
    return min;
  }
  

  console.log(min(100, 40));
  console.log(min(30, 50));