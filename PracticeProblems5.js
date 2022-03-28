// console.log(Math.abs(-5));
// let absoluteValue = Math.abs(-5);
// console.log(absoluteValue);
// let ceilingValue = Math.ceil(1.1111111112);
// console.log(ceilingValue);
// var floorValue = Math.floor(5.9999);
// console.log(floorValue);
// let i = 1;
// while(i <= floorValue){
//     var valueRandom = Math.random() * 6;
//     var roundedRandom = Math.round(valueRandom);
//     console.log(roundedRandom);
//     i++;
// }
function findLargest(number1, number2, number3){
    if(number1 > number2 && number1 > number3){
        return number1;
    }
    else if(number2 > number1 && number2 > number3){
        return number2;
    }
    else{
        return number3;
    }
}
let first = 501;
let second = 601;
let third = 701;
console.log('The largest number is:-',findLargest(first, second, third));
function findSmallerst(number1, number2, number3){
    if(number1 < number2 && number1 < number3){
        return number1;
    }
    else if(number2 < number1 && number2 < number3){
        return number2;
    }
    else{
        return number3;
    }
}
console.log('The Smallest number is:-',findSmallerst(first, second, third));
 const numbers = [44, 34, 23, 34, 56, 100, 200, 105];
//  let sum = 0;
//  for (let i=0; i< numbers.length; i++){
//      sum = sum + numbers[i];
     
//  }
 function arrayElementsSum(num)
 {
 let sum = 0;
 for (let i=0; i< numbers.length; i++){
     sum = sum + numbers[i];
 }
 return sum;
}
 console.log(arrayElementsSum(numbers));
 function largestElementOfArray(num){
     let largest = num[0] ;
     for(var i=0; i < num.length; i++){
         let elements = num[i];
         if(elements >largest)
         {
             largest =elements
         }
     }
     return largest;
 }
 console.log(largestElementOfArray(numbers));
 function fibonacciSeries(num){
     let fibo = [0,1];
     for(var i=2; i< num; i++){
         fibo[i] = fibo[i-1] + fibo[i-2];
         
     }
     return fibo;
 }
//  var fiboNumbers = fibonacciSeries(25);
//  console.log(fiboNumbers);
console.log(fibonacciSeries(25));