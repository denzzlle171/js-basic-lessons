function countArea(chickens, caws, pigs) {
    let countChickens = chickens * 0.2;
    let countCaws = caws * 1.5;
    let countPigs = pigs * 0.5;
  return countChickens + countCaws + countPigs;
  }
  console.log(countArea(30, 3, 7))
  console.log(countArea(25, 5, 10))
  console.log(countArea(100, 2, 5))
  console.log(countArea(45, 1, 15))
  console.log(countArea(80, 2, 4))


  

let countAreaArrow = (chickens, caws, pigs) =>
chickens * 0.2 + caws * 1.5 + pigs * 0.5

 console.log(countAreaArrow(35, 3, 8))
 console.log(countAreaArrow(30, 5, 11))
 console.log(countAreaArrow(90, 2, 6))
 console.log(countAreaArrow(35, 1, 14))
 console.log(countAreaArrow(20, 10, 4))