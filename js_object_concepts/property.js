const bottle = {
    color: 'red',
    price: 50,
    hold: 'water substance',
    isCleaned: true,
}
const keys = Object.keys(bottle)
console.log(keys)
const values = Object.values(bottle)
const pairs = Object.entries(bottle)
console.log(values)
console.log(pairs)
Object.seal(bottle)
delete bottle.isCleaned
console.log(bottle)
