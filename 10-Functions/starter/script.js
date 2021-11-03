'use strict';

// const runOnce = function () {
//   console.log('This will never run again');
// };
// runOnce();

// //IIFE --> Immedialtely Invoked Function Expression
// (function () {
//   console.log('This will never run again');
// })();

// (() => console.log('This will never run again'))();

///////////////Closure////////////////////
// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };
// const booker = secureBooking();
// booker();
// booker();
// booker();
// console.dir(booker);

// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };
// g();
// f();
// //Reassigned f function
// h();
// f();

// console.dir(f);

//Example 2
// const boardPassenger = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passenger`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// const perGroup = 1000;
// boardPassenger(180, 3);
