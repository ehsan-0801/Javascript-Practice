const person = {
    name: 'Elon Mask',
    company: 'Tesla',
    position: 'CEO',
}
const Owner = new Object(person);
const human = Object.create(person)
console.log(Owner)
console.log(human)
console.log(human.company)


class People{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const people1 =new People('Manus', 12)
console.log(people1)

function manus(name){
    this.name = name; 
}
const man = new manus('abc')
console.log(man)