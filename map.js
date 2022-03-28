const numbers= [4,6,10,8];
const output2 = [];
function doubleold(number){
    return number *2;
}
const doubleIt = number =>number *2;
for(const number of numbers){
    const result =  doubleIt(number);
    output2.push(result);
}
console.log(output2);
const output = numbers.map(doubleIt);
console.log(output);
const sqaures = numbers.map(x => x*x);
const cube = numbers.map(x => x*x*x);
console.log(sqaures)
console.log(cube)