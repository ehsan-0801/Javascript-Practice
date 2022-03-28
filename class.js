class Support{
    name;
    designation = 'support web dev';
    address= 'BD'
    constructor(name, address,designation){
        this.name = name;
        this.address = address;
        this.designation = designation;
    }
    startsession(){
        console.log('start a support session');
    }
}
const aamir = new Support('aamir', 'Dubai');
const SRK = new Support('SRK','Mumbai');

console.log(aamir, SRK );
aamir.startsession()
const arr = [5,10,12,15,16]
console.log(arr)
arr.push(19)
console.log(arr)
function min(nums) { return Math.min(nums) }
console.log(min( [1,3,2 ])) 
const cube=x=> x*x*x; 
console.log(cube(2))
const [a, b] = [1,2,3,4,45,5]; 
console.log(a+b);
const {x, y, z} = {x: 1, y1: 2, z: 3};
console.log(y)
const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);

console.log(output);

const person=[ {singer:'Atif aslam', address:'23 something street'}]
console.log(person[0].address)
const player = { name: { firstName: "Mashrafe", lastName: "Murtaza" }, age: 38};

console.log(player.firstName);