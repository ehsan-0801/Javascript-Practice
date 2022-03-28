const first = { a: 1}
const second = { a: 1}
const third = first
// if(first == second){
//     console.log('Objects are equal');
// }
// else{
//     console.log('Objects are different');
// }
// if(first == third){
//     console.log('Objects are equal');
// }
// else{
//     console.log('Objects are different');
// }
if(JSON.stringify(first) === JSON.stringify(third)){
    console.log('Objects are equal');
}
else{
    console.log('Objects are different');
}