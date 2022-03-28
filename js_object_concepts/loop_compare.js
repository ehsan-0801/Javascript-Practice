const bottle = {
    color: 'red',
    price: 50,
    hold: 'water substance',
    isCleaned: true,
}
for(const prop in bottle){
    console.log(prop, bottle[prop])
}
const keys  = Object.keys(bottle)
for(const prop of keys){
    console.log(prop, bottle[prop])
}
for (const [key,value] of Object.entries(bottle)){
    console.log(key,value);
}