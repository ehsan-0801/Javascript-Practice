const numbers =[5, 10, 12, 13, 7, 41, 50, 30, 19]
const bignumbers = numbers.filter(Number => Number > 20);
const smallnumbers = numbers.filter(Number => Number < 20);
console.log(bignumbers);
console.log(smallnumbers);