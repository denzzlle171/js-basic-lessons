
const user = { 
  id: 11111,
  name: 'Ihor',
  age: 27,
};


function copyObj(obj) {
  let coppy = {};

  for(const key in obj){
    coppy[key] = obj[key];
  }
  return coppy
}
let ress = copyObj(user)


console.log(user)
console.log(ress)
///// add new value 
ress.sex = 'male';
console.log(user)
console.log(ress)