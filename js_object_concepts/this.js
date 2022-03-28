const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    treatdey: function(expense){
        this.money = this.money - expense;
        console.log('Treated Money:',this)
        console.log('Treat Money:',this.money)
        return this.money;
    },
    treatdeyArrow: ()=>{
        console.log(this)
    },
    treatdeyInside: function(){
        const myArrow = () => console.log(this);
        myArrow();
    },
} 
function add(){
    console.log(this)
}