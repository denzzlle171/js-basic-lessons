const arr = [10, 20, 30, 40, 50];

function reverseArray(arr) {
  let copyArr = arr.slice();
  let result;
  for (let index = 1; index <= arr.length; index += 1) {
    copyArr[index - 1] = arr[arr.length - index];

    result = copyArr;
  }
  return result;
}

reverseArray(arr);

console.log(reverseArray(arr));
console.log(arr);
