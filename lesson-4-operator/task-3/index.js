//my balance
const balance = 15600;

// describe some product
const id = 1001;
let productName = 'IPhone 12 Pro Max';
let isAvailable = true;
let price = 20000;
const color = 'Silver';
let storeAddress = null;

/**
 * Может ли пользователь купить конкретный товар? Выведи результат проверки в консоль
 */

const canBuyProduct =  balance >= price;
console.log(canBuyProduct);
// put your code here

/**
 * Есть ли товар в наличии? Выведи результат проверки в консоль
 */

 console.log(isAvailable);
// put your code here

/**
 * Является ли цвет выбранного товара Silver. Выведи результат проверки в консоль
 */
//const isSilver = color == 'Silver'
//console.log(isSilver);
console.log(color === 'Silver')
// put your code here