const obj = {id: 001, name: 'abc', password : '', salary: 100000}
const obj2 = {id: 002, name: 'def', password : '', salary: 200000}
const u_id = obj.id;
const {id,name, password,salary} = obj2 
const uname = obj.name;
const pass = obj.password;
const salary2 = obj.salary;
console.log(u_id)
console.log(uname)
console.log(pass)
console.log(salary2);
console.log(id)
console.log(name)
console.log(password)
console.log(salary);
const company = {
    name : 'GP',
    Type : 'IT',
    work : {
        Network : 'sim',
        web : 'MyGP',
        software : 'MYGP',
    }
}
console.log(company.work.Network);
console.log(company.work.web);
console.log(company.work.software);
console.log(company?.backend?.work.software);