function palindrome(str) {
  return str === str.split('').reverse().join('');
}

////step by step\\\\
function palindrome(str) {
  let strSplit = str.split('');
  let strReverse = strSplit.reverse();
  let strBack = strReverse.join('');

  if (str === strBack) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome('racecar')); //true
console.log(palindrome('table')); // false
