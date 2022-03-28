const bank = owner =>{
    balance = 0;
    return {
        deposit: amount =>{
            balance += amount;
            return balance;
        },
        withdraw: amount =>{
            balance -= amount;
            return balance;
        },
        balance: amount =>{
            balance = amount;
            return balance;
        }
    }
}
const bracbank = bank('brac');
// console.log(bracbank(100))
// console.log(bracbank(500))
// console.log(bracbank(700))
console.log(bracbank.deposit(1000))
console.log(bracbank.deposit(500))
console.log(bracbank.deposit(500))
console.log(bracbank.withdraw(200))
console.log(bracbank.withdraw(1200))
console.log(bracbank.balance(1200))