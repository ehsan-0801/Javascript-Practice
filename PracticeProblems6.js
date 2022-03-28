let list = [4, 5, 6, 7, 1, 3 , 3, 2, 9, 4, 6 ];
function removeduplicate(arr){
    let unique = [];
    for(let items of arr){
        if(unique.indexOf(items) == -1){
            unique.push(items);
        }
    }
    return unique;
}
console.log(removeduplicate(list));
let str = 'Hi this is JavaScript!';
// str.push('abd');
console.log(str[0]);
function reversestring(text){
    let reverse ='';  
    for(let letter of text){
         reverse = letter + reverse;
         
    }
    console.log(reverse);
}
reversestring(str);
function reverseString(strn) {
    var newString = "";
    for (var i = strn.length - 1; i >= 0; i--) {
        newString += strn[i];
    }
    console.log(newString);
}
reverseString(str);
function reverseStringSpaceless(text){
    let totalstringArray = text.split("");
    let reverseString = "";
    for(let i= totalstringArray.length-1; i >= 0; i-- )
    {
        if(totalstringArray[i] != " "){
            reverseString += totalstringArray[i];
        }
        
    }
    console.log(reverseString);
}
reverseStringSpaceless(str);
function foobar(num){
    for(let i = 0; i < num; i++){
        if( i%3 == 0 && i%5 == 0){
            console.log("foobar")
        }
        else if( i%3 == 0){
            console.log("foo")
        }
        else if( i%5 == 0){
            console.log("bar")
        }
        
        else{
            console.log(i);
        }
    }
}
foobar(50);