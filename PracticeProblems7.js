// // var str = "Hello"
// // console.log(str.indexOf("e"));
// // console.log(str.length);
// const phones =[
//     {name : "Samsung", price: 35000, camera: 12, storage:24 },
//     {name : "Iphone", price: 100000, camera: 12, storage:24 },
//     {name : "Xiomi", price: 30000, camera: 12, storage:24 },
//     {name : "Realme", price: 20000, camera: 12, storage:24 },
//     {name : "Oppo", price: 22000, camera: 12, storage:24 },
// ]
// let cheapest = phones[0];
// for(let phone of phones){
//     if(phone.price < cheapest.price){
//         cheapest =phone;
//     }
// }
// console.log("Price "+ cheapest.price);
// function biggerThanEighty(numbers){
//     let overEighty =[]
//     for(let number of numbers){
//         if(number > 80){
//             overEighty.push(number);
//         }
//     }
//     console.log(overEighty);
// }
// let arr =[82, 32, 54, 55, 95, 75, 99, 100, 105, 90];
// biggerThanEighty(arr);

// let i = 7;
// while(i < 20){
//     if(i%2 != 0){
//         console.log(i);
//     }
//     i++;
// }
// function findingSecondMax(array){
//     let min = array[0];
//     let sortedArray=[];
//     for(let i = 0; i < array.length; i++){
//         if(min > array[i]){
//             min = array[i];
//             sortedArray.push(min);
        
//         }
//         console.log(sortedArray);
//     }
    
// }
// findingSecondMax(arr);
function canNest(arr1, arr2) {
	let arr1min =arr1[0];
	let arr2min =arr2[0];
	let arr1max =arr1[0];
	let arr2max =arr2[0];
	
	for(let i = 0; i < arr1.length; i++){
		if(arr1min > arr1[i]){
			arr1min = arr1[i];
		}
	}
	for( let j = 0; j < arr2.length; j++){
			if(arr2min > arr2[j]){
			arr2min = arr2[j];
		}
	}
	for(let i = 0; i < arr1.length; i++){
		if(arr1max < arr1[i]){
			arr1max = arr1[i];
		}
	}
	for( let j = 0; j < arr2.length; j++){
			if(arr2max < arr2[j]){
			arr2max = arr2[j];
		}
	}
    
    if(arr1min > arr2min && arr1max < arr2max){
        return true
    }
    else{
        return false
    }
}
let arr1 =[54, 62, 58, 52, 35, 64, 52]
let arr2 =[44, 72, 88, 52, 55, 75, 20]
canNest(arr1,arr2);