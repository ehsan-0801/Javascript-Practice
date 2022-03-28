const products = [
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB camera flashlight phone',
    'yellow laptop with back camera',
    'LG supernova laptop',
    'HTC low price PHones',
    'purple color phone',
]
const searching ='laptop'

const output = [];
// for(const product of products)
// {
//     if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
//         output.push(product);
//     }
// }
// console.log(output);
for(const product of products){
    if(product.toLowerCase().includes(searching.toLowerCase())){
        output.push(product);
    }
}
console.log(output);