const obj = {
  id: 1001,
  name: 'IPhone 12 Pro Max',
  isAvailable: true,
  price: 20000,
  color: 'silver',
  storeAddress: null,
};

function getKeys(obj) {
  const keys = Object.keys(obj);

  return keys;
}
console.log(getKeys(obj));



function getValues(obj) {
  const values = Object.values(obj);

  return values;
}

console.log(getValues(obj));












// function getKeys(obj) {
//   let keyArr = [];
//   for (const key in product) {
//     keyArr.push(key);
//   }
//   return keyArr;
// }
// console.log(getKeys(product));

// function getValues(obj) {
//   let valueArr = [];
//   for (const value in product) {
//     valueArr.push(product[value]);
//     console.log();
//   }
//   return valueArr;
// }
// console.log(getValues(product));

// /////////////

// function getKeys(obj) {
//   const keys = Object.keys(product);

//   return keys;
// }
// console.log(getKeys(product));





// function getValues(obj) {
//   const values = Object.values(product);

//   return values;
// }

// console.log(getValues(product));
