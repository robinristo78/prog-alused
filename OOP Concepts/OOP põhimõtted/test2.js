class Person {
    constructor () {
        this.firstname = "";
        this.lastname = "";
        this.age = 0;
    } 
} 

class Student {
    constructor(firstname, lastname, age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    } 
}

const person1 = new Person();
person1.firstname = 'John';
person1.lastname = 'Doe';
person1.age = 40;

const person2 = new Person();
person2.firstname = 'Jane';
person2.lastname = 'Doe';
person2.age = 24;

const person3 = new Person();
person3.firstname = 'Elton';
person3.lastname = 'John';
person3.age = 44;

console.log(person1);

const student1 = new Student('John', 'Doe', 40);
const student2 = new Student('Jane', 'Doe', 24);
const student3 = new Student('Elton', 'John', 44);

console.log(student1);