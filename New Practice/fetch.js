console.log('abcd')
console.log('qwerty')
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
console.log('vbnm')
console.log('hjkl')
for(let i =0; i < 100; i++){
    console.log(i);
}