/*///////////!!!!! right!!!!!! /////////////
function usersCountByCity(users) {

let resultObj = {};
 for(let index = 0; index < users.length; index += 1){
 let obj = users[index]
 let cityItem = obj.city

 let key = Object.keys(resultObj)

if (key.includes(cityItem)){
  resultObj[cityItem] +=1;
}else{
  resultObj[cityItem] =1;
}
 
}
return resultObj
}
*/


function usersCountByCity(users) {
  let countOfArr = [];
  let resultObj = {};
   for(let index = 0; index < users.length; index += 1){
     
   let obj = users[index]
   let cityItem = obj.city
   console.log(users[index])
   countOfArr.push(cityItem)
  // console.log(cityItem)
  // console.log(countOfArr)
if(resultObj[cityItem]){
  resultObj[cityItem]+=1; 
}else{ 
  resultObj[cityItem] = 1
}
3

}
console.log(resultObj)
 return resultObj
  }




// examples
const users = [
  {
    id: 888,
    name: 'Denis',
    age: 44,
    city: 'Kyiv',
  },
  {
    id: 333,
    name: 'Alex',
    age: 33,
    city: 'Lviv',
  },
  {
    id: 392,
    name: 'Nastya',
    age: 22,
    city: 'Kyiv',
  },
  {
    id: 123,
    name: 'Violetta',
    age: 15,
    city: 'Odesa',
  },
  {
    id: 640,
    name: 'Mykola',
    age: 31,
    city: 'Lviv',
  },
];

usersCountByCity(users); // ===> { 'Kyiv': 2, 'Lviv': 2, 'Odesa': 1 }


// massive
// let countOf = [];
// countOf[index] = obj.city
// console.log(countOf)
