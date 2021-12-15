'use strict';

/* ==================================== */
/* ===> мутирующие методы массивов <=== */
/* ===> изменяют исходный массив <===== */
/* ==================================== */

/* push - добавит элемент в конец массива */

/**
 * С помощью метода push добавь число 111 в конец массива arr
 * Выведи в консоль результат работы метода push, а так же массив arr после выполнения push
 */

// put your code here
const arr = [1, 2, 3, 4, 5];
let res = arr.push(111);
console.log(res);
console.log(arr);


/* pop - удалит из массива последний элемент и вернет его */

/**
 * С помощью метода pop удали последний элемент массива students
 * Выведи в консоль результат работы метода pop, а так же массив students после выполнения pop
 * */

// put your code here

const students = ['Alex', 'Ann', 'Jaz', 'Viktor'];
const popRes = students.pop()
console.log(popRes);
console.log(students);


/* shift - удалит из массива первый элемент и вернет его */

/**
 * С помощью метода shift удали первый элемент массива points
 * Выведи в консоль результат работы метода shift, а так же массив points после выполнения shift
 * */

// put your code here
const points = [11, 24, 37, 40, 7];
const shift= points.shift();
console.log(shift);
console.log(points);


/* unshift - добавит элемент в начало массива */

/**
 * С помощью метода unshift добавь число 22 в начало массива ages
 * Выведи в консоль результат работы метода unshift, а так же массив ages после выполнения unshift
 * */

// put your code here
const ages = [18, 25, 31, 29, 50, 11, 1000000];
let unshift1 = ages.unshift(22);
console.log(unshift1)
console.log(ages);

/* ======================================= */
/* ===> НЕ мутирующие методы массивов <=== */
/* ===> НЕ изменяют исходный массив <===== */
/* ======================================= */

/* includes - проверяет есть ли элемент в массиве */

/**
 * С помощью метода includes проверь есть ли числа 0 и 100 в массиве numbers. Результат проверок выведи в консоль
 */

// put your code here
const numbers = [5, 0, 8, 10, -4, 50, 220];
console.log(numbers.includes(50));
console.log(numbers.includes(0));
console.log(numbers.includes(100));
