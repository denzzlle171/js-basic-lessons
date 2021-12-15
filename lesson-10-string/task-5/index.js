function camelCase(str) {
  let string = str.split(' ');
  let newStr = '';
  let result = '';
  let resultString;
  let substring;
  let resCamell;

  for (let index = 0; index < string.length; index += 1) {
    substring = string[0 + index];

    resultString = substring.toUpperCase()[0] + substring.slice(1);

    result = newStr += resultString;
  }
  resCamell = result.toLowerCase()[0] + result.slice(1);

  return resCamell;
}

// examples
console.log(camelCase('some function name')); // ===> someFunctionName
console.log(camelCase('get message')); // ===> getMessage
console.log(camelCase('render tasks list')); // ===> renderTasksList
