var watch = ['titan', 'Citizen', 'vanila', 'Premio' ];
watch.push('abc');
console.log(watch);

function sitationHandler(watch){
    if(watch.length >= 4)
    {
        console.log("Excellent Collection");
    }
    else if(watch.length < 4 && watch.length > 0){
        console.log("Enough Collection");
    }
    else{
        console.log("Poor Situation");
    }
}
watch.pop();
console.log(watch)
sitationHandler(watch);
watch.pop();
console.log(watch)
sitationHandler(watch);
watch.pop();
console.log(watch)
sitationHandler(watch);
watch.pop();
console.log(watch)
sitationHandler(watch);
watch.pop();
console.log(watch)
sitationHandler(watch);
watch.pop();
console.log(watch)
sitationHandler(watch);

watch.push("xiomi");
console.log(watch);
sitationHandler(watch);
watch.push("appleWatch");
console.log(watch);
sitationHandler(watch);
watch.push("Huawei");
console.log(watch);
sitationHandler(watch);