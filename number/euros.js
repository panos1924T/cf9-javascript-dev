const EXHANGE_RATE = 0.85;
let euros = 50;
let dollars = 0;
let roundedAmount = 0;

dollars = euros * EXHANGE_RATE;
roundedAmount = Math.round(dollars * 100) /100;

console.log(dollars);
console.log(roundedAmount);

