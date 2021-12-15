/*    I THINK SO
function sum(from, to) {
  let suma = 0;
  while (from <= to) {
    from += 1;
    suma += from;
  }
  return suma;
}

sumAB = sum(4, 10);
sumCD = sum(8, 14);

function compareSums(AB, CD) {
  if (AB > CD) {
    return true;
  } else {
    return false;
  }
}
console.log(compareSums(sumAB, sumCD));
*/

/*     MY WRONG ANSWER
function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  return sum(firstFrom, firstTo) > sum(secondFrom, secondTo);
}

function sum(from, to) {
  let sum = 0;
  while (from <= to) {
    from += 1;
    sum += from;
  }
  return sum;
}
*/

function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  return sum(firstFrom, firstTo) > sum(secondFrom, secondTo);
}

function sum(from, to) {
  let sum = 0;
  for (let n = from; n <= to; n += 1) {
    sum += n;
  }
  return sum;
}

console.log(compareSums(45, 56, 11, 12));
console.log(compareSums(1, 10, 25, 80));
console.log(compareSums(12, 24, 36, 44));
console.log(compareSums(1, 5, 6, 7));
console.log(compareSums(12, 56, 57, 90));

// function sum(from, to) {
//   let sum = 0;
//   for (let n = from; n <= to; n += 1) {
//     sum += n;
//     console.log(n);
//   }
//   return sum;
// }
// console.log(sum(1, 10));

// function sum(from, to) {
//   let suma = 0;
//   while (from <= to) {
//     suma += from;
//     from += 1;
//     console.log(from);
//     console.suma;
//   }
//   return suma;
// }
// console.log(sum(1, 10));
