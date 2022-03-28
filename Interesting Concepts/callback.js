function welcomeMessage(name){
    console.log(name);
}
const uname = 'Tom Hanks'

let count = 0;
function greetCounting(){
    count++
    return 'good morning ' + count + ' time';
}
welcomeMessage(greetCounting())