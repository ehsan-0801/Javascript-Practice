function GradingSystem(num){
   if(num >= 90 && num <= 100 ){
       return 'A+';
   }
   else if(num >= 80 && num < 90 ){
       return 'A';
   }
   else if(num >= 70 && num < 80 ){
       return 'B';
   }
   else if(num >= 60 && num < 70 ){
       return 'C';
   }
   else if(num >= 50 && num < 60 ){
       return 'D';
   }
   else if(num < 50){
       return 'Fail';
   }
   else{
       return 'Invalid Input';
   }
}
console.log('Alia got : ', GradingSystem(95));
console.log('Dalia got : ', GradingSystem(66));
console.log('Salia got : ', GradingSystem(80));
console.log('Malia got : ', GradingSystem(59));
console.log('Lilia got : ', GradingSystem(47));
console.log('Jalaiya got : ', GradingSystem(77));

function roadSignal(Color){
    switch (Color) {
        case 'red' : 
        console.log("stop there");
        break;
        case 'green' : 
        console.log("You can go now");
        break;
        case 'yellow' : 
        console.log("Wait for sometime");
        break;
    }
}
signal1 = 'red'
signal3 = 'green';
signal2 = 'yellow';
roadSignal(signal1);
roadSignal(signal2);
roadSignal(signal3);