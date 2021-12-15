const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const getSubArray = (arr, numberOfElements) => {
  let NewArray = [];

  for (let index = 0; index < numberOfElements; index += 1) {
    NewArray.push(arr[index]);
    
  }
  return NewArray;
};
getSubArray(arr, 7);
console.log(getSubArray(arr, 7));

