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
kibria.treatdey(100);
const heroTreatdey =kibria.treatdey.bind(chodnaAlom);
heroTreatdey(500)
