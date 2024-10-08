'use strict';

const TARGET_NUMBER = Number(process.argv[2]);
// console.log(fibonacci(TARGET_NUMBER));

// function fibonacci(num_param) {
//   if (num_param === 0) {
//     return 0;
//   }
//   else if (num_param === 1) {
//     return 1;
//   }
//   else {
//     const ARRAY = [0, 1];
//     for (let i = 2; i <= num_param; i++) {
//       ARRAY.push(ARRAY[i - 2] + ARRAY[i - 1]);
//     }
//     return ARRAY[num_param];
//   }
// }

// for (let i = 0; i <= TARGET_NUMBER; i++){
//   console.log(fib(i));
// }

// function fib(n) {
//   if (n === 0) {
//     return 0;
//   }
//   else if (n === 1) {
//     return 1;
//   }
//   else {
//     return fib(n - 2) + fib(n - 1);
//   }

// }

const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
function fib(n) {
  if (memo.has(n)) {
    return memo.get(n);
  }
  const value = fib(n - 2) + fib(n - 1);
  memo.set(n, value);
  return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}