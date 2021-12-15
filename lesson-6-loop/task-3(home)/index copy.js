function sumOfMillions() {
  let index = 0;
  let sum = 0;
  while (index < 10000000) {
    index += 1;
    sum += index;
  }
  return sum;
}
console.log(sumOfMillions());
/*console.log(index);*/
