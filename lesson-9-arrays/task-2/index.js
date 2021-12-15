const students = [
  'Andrey',
  'Denis',
  'Alex',
  'Nastya',
  'Ninja',
  'Skywoker',
  'Joda',
  'Leo',
];
// variant 1
function printArray(arr) {
  for (let index = 0; index < arr.length; index += 1) {
    console.log(arr[index]);
  }
}
printArray(students);

// variant 2
function printArrayForOf(arr) {
  for (let el of arr) {
    console.log(el);
  }
}
printArrayForOf(students);
