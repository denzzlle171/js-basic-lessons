function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  return sum(firstFrom, firstTo) > sum(secondFrom, secondTo);
}
function sum(from, to) {
  let sum = 0;

  for (let num = from; num <= to; num += 1) {
    sum += num;
  }

  return sum;
}
console.log(sum(2, 10));
console.log(compareSums(1, 4, 4, 6));
