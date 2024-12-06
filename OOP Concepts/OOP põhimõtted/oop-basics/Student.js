const Person = require("./Person");

class Student extends Person {
    constructor(name){
        super(name);
        this.hinded = [];  
        this.id = null;
        this.desc = "";
    }

    setId(id){
        this.id = id;
    }

    getId(){
        return this.id;
    }

    getGrades(){
        return this.hinded;
    }

    addGrade(course, grade){
        this.hinded.push({course, grade});
    } 

    getAverageGrade(){
        if (this.hinded.length === 0) return -1;

        let total = 0;
        this.hinded.forEach(entry => {
            total += entry.grade;
        });

        return total / this.hinded.length;
    }

    description(){
        return "Name: " + this.name + ", Desc: " + this.desc;
    } 
}

module.exports = Student;