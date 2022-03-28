function defineLeapYear(year){
    if(year % 100 == 0 && year % 400 == 0){
        return "Leap Year";        
    }
    else if(year % 100 != 0 && year % 4 == 0){
        return "Leap Year";
    }
    else{
        return "Not a Leap Year";
    }
}
year = 2000;
let LeapYearStatus = defineLeapYear(year);
console.log('This ' + year +' is a',LeapYearStatus);
function OddEven(Number){
    if(Number % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(OddEven(200));
console.log(OddEven(205));
console.log(OddEven(352));
console.log(OddEven(459));
console.log(OddEven(2005));
console.log(OddEven(2000));
function factorial(num){
    if(num === 0){
        return 1;
    }
    return num * factorial(num - 1); 

}
console.log(factorial(5));


function getfactorial(num){
    let x = 1;
     var factorial = 1;
    while(x <= num){
        factorial = factorial * x; 
        x++;
    }
    return factorial; 
}
console.log(getfactorial(6))

function factorialInRecursive(num){
    if(num === 0){
        return 1;
    }
    let fact = num * factorialInRecursive(num-1);
    num--;
    return fact;
}
console.log(factorialInRecursive(5));