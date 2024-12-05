class Student {
    constructor(name){
        this.name = name;
        this.finished = false;
    } 
}

const student1 = new Student('John');
const student2 = new Student('Mary');
console.log(student1.name);
console.log(student1.finished);