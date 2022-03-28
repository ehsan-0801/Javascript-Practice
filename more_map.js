const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom imam'];
const length = friends.map(friend => friend.length);
console.log(length);
const products = [
    { name: 'Smart Watch', price: '50', color : 'black'},
    { name: 'Smart phone', price: '15000', color : 'Blue'},
    { name: 'Smart TV', price: '50000', color : 'black'},
    { name: 'Smart LED Lights', price: '5000', color : 'black'},
]
const productNames =products.map(product => product.name)
const productPrices =products.map(product => product.price)
console.log(productNames)
console.log(productPrices)
products.map(product =>console.log(product));
products.forEach(product =>console.log(product));
const highpriced = products.filter(product => product.price > 10000)
const lowpriced = products.filter(product => product.price > 10000)
const overpriced = products.filter(product => product.price > 100000)
console.log(highpriced);
console.log(lowpriced);
console.log(overpriced);
const pinkcolor = products.find(product => product.color == 'pink')
const blackcolor = products.find(product => product.color == 'black')
console.log(blackcolor)