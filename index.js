let number = document.getElementById("num").value;
console.log(number);
document.getElementById("btn").onclick = function fiboseries(num){
    let fibo = [0,1];
     for(var i=2; i< num; i++){
         fibo[i] = fibo[i-1] + fibo[i-2];
         
     }
     return fibo;
}
document.getElementById("fibo").innerHTML= fiboseries(number);