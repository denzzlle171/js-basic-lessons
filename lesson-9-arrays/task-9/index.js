const arr = [15, 25, 35, 45, 55, 65, 75, 85, 95, 105];

function cloneArr(arr) {
  let ArrayClone = [];

  for (let index = 0; index < arr.length; index += 1) {
    ArrayClone.push(arr[index]);
  }
  return ArrayClone;
}

cloneArr(arr);
console.log(cloneArr(arr));
console.log(arr);

// const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// const getSubArray = (arr, numberOfElements) => {
//   let NewArray = [];

//   for (let index = 0; index < numberOfElements; index += 1) {
//     NewArray.push(arr[index]);

//   }
//   return NewArray;
// };
// getSubArray(arr, 7);
// console.log(getSubArray(arr, 7));
