

function isLetter(c) {
  return c.toLowerCase() !== c.toUpperCase();
}


function isValidWord(str) {
  const strArr = str.split('');
  
 for(let index = 0; index < strArr.length; index +=1 ) {

  if((!isLetter(strArr[index])) && strArr.length < 1){ 
return false
  }
  
 }
 console.log(strArr.length)
 return true
 
}



isLetter('h');
isLetter('W'); 
isLetter('@'); 
isLetter('1'); 

console.log(isValidWord('h')); 
console.log(isValidWord('Hello')); 
console.log(isValidWord('Test@')); 
console.log(isValidWord('someName1'));
console.log(isValidWord('It is me')); 
