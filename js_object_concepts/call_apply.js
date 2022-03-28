const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    treatdey: function(expense, tips, tax){
        this.money = this.money - expense - tips-tax;
        console.log(this)
        console.log('Treat Money:',this.money)
        return this.money;
    }
} 
const chodnaAlom = {
    id: 102,
    money: 6000,
    name: 'chodna Alom',
}
const Rudrabainchod = {
    id: 103,
    money: 8000,
    name: 'Rudra bainchod Roy',
}
// kibria.treatdey(100);
// const heroTreatdey =kibria.treatdey.bind(chodnaAlom);
// heroTreatdey(500)
kibria.treatdey.apply(Rudrabainchod, [1000,50,50])
kibria.treatdey.call(chodnaAlom,400,50,50)