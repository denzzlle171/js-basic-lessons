'use strict';

const product = {
  id: 1001,
  name: 'IPhone 12 Pro Max',
  isAvailable: true,
  price: 20000,
  color: 'silver',
  storeAddress: null,
};

const productName = product.name;
const storeAddress = product['storeAddress'];
console.log(productName);
console.log(storeAddress);

product.deliveryOptions = ['Новая почта','Укр почта','Самовывоз']
console.log(product)

