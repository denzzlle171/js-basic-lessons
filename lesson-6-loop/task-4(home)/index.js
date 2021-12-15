function factorial(num) {
  let index = 0;
  let n = 1;
  while (index < num) {
    index += 1;
    n *= index;
  }
  return n;
}

console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(100));
console.log(factorial(2));
