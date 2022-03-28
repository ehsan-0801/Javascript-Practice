const student = {
    id: 101,
    name: 'abc',
    dept: 'CSE',
    major: 'SE',   
    subjects: ['SE','SRE','SQAT','PYTHON','WEB DEVELOPMENT'],
    projects:{
        Pname:'Elearning Software',
        thesis: 'Machine Learning',
    },
    study: function(){
        console.log(this.name,'study')
    }
}
student.study();