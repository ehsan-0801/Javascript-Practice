// Problem 1
// function to convert ana to vori


function anaToVori(ana){
    if(ana > 0){
        let vori = ana / 16; //as 1 ana = 16 vori
        return vori;
    }
    else{
        return "Invalid Input";
    }
}

let calculatingVori = anaToVori(32);
console.log(calculatingVori);

//Problem-2
//function total cost from foodpanda

let singaraPrice = 7;
let samosaPrice = 10;
let jalebiPrice = 15;

function pandaCost(singaraAmount, samosaAmount, jalebiAmount){
    if(singaraAmount >= 0 && samosaAmount >= 0 && jalebiAmount >= 0){
        let singaraCost = singaraAmount * singaraPrice;
        let samosaCost = samosaAmount * samosaPrice;
        let jalebiCost = jalebiAmount * jalebiPrice;
        let totalCost = singaraCost + samosaCost + jalebiCost;
        return totalCost;
    }
    else{
        return "Invalid Input"; 
    }
}

let calculateTotalCost = pandaCost(5, 2, 3);
let calculateTotalCost2 = pandaCost(5, 2, -3);
let calculateTotalCost3 = pandaCost(0, 0, 0);
console.log(calculateTotalCost);
console.log(calculateTotalCost2);
console.log(calculateTotalCost3);

//problem 3
//function of picnicBudget

function picnicBudget(totalPeople){
    let totalBudget = 0;
    if(totalPeople >= 0){
        if(totalPeople <= 100){
        totalBudget += totalPeople * 5000;
        }
        else if(totalPeople > 100 && totalPeople <= 200){
            let resthundreadpeople = totalPeople - 100;
            totalBudget += (100 * 5000) + (resthundreadpeople * 4000);
        }
        else{
            
            let resthundreadpeople = 200 - 100;
            let restpeople = totalPeople - (resthundreadpeople + 100);
            totalBudget += (100 * 5000) + (resthundreadpeople * 4000) +( restpeople * 3000);
        }
    }
    else{
        return "Invalid Input";
    }
    return totalBudget;
}
let budgetCalculation = picnicBudget(550);
let budgetCalculation2 = picnicBudget(150);
let budgetCalculation3 = picnicBudget(56);
let budgetCalculation4 = picnicBudget(-20);
console.log(budgetCalculation);
console.log(budgetCalculation2);
console.log(budgetCalculation3);
console.log(budgetCalculation4);

// Problem - 04
// function oddfriend
let friendName = "";
function oddFriend(friendsArray){
    
    if(friendsArray.length > 0){
        
        for(let i=0; i< friendsArray.length; i++){
            if(friendsArray[i].length % 2 != 0){
                friendName += friendsArray[i];
                break;
            }
            else if(friendsArray.length == 0){
                return 'no odd name';
            }
            else if(friendsArray[i].length % 2 == 0){
                continue;
            }
            
        }
        return friendName;
        
    }
    else{
        return 'There is no person';
    }
    
}
let friends = [["abcd", "abcde", "abc"]]
let oddFriendsName = oddFriend(friends);
console.log(oddFriendsName);
