function getAbbreviation(str) {
  let string = str.split(' ');
  let newStr = '';
  let resultAbr = '';

  for (let index = 0; index < string.length; index += 1) {
    let substring = string[0 + index];
    if (substring.length >= 3) {
      let letter = substring.toUpperCase()[0];

      resultAbr = newStr += letter;
    }
  }
  console.log(typeof resultAbr)
  return resultAbr; 
}
// examples
console.log(getAbbreviation('some company name')); // ===> SCN
console.log(getAbbreviation('Union of Soviet Socialist Republics')); // ===> USSR
console.log(getAbbreviation('United States')); // ===> US
