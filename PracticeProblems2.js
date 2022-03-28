function tableOfNumbers(num){
    for(var i=1; i<=10; i++){
        var result = i * num;
        console.log(result);
    }
}
tableOfNumbers(13);
function convertingToLowerCase(str){
    console.log(str.toLowerCase());
}
text= "HELLO JAVASCRIPT";
convertingToLowerCase(text);
// function alpha()
// {
//     var a=prompt("Enter String: ");
//     var output="";
//     for(var x=0;x<a.length;x++)
//             output+=String.fromCharCode(a.charCodeAt(x)>96 && a.charCodeAt(x)<123 ? a.charCodeAt(x)-32: a.charCodeAt(x))
//     return output;
// }
// console.log("--" + alpha());
function fullName(firstName, lastName){
    return firstName + ' ' + lastName;
}
fName = 'hablu';
lName = 'kanto';
// Name = ;
console.log("Your Full Name is :", fullName(fName, lName));

function square(num){
    return num*num;
}
console.log('The sqaure value is: ',square(5));
const pizza = {

 toppings: ['cheese', 'sauce', 'pepperoni'],

 crust: 'deep dish',

 serves: 2

}
console.log('the topping item is: ',pizza.toppings[2]);