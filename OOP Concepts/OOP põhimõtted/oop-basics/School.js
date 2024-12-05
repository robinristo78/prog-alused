const Student = require('./Student');
const Course = require('./Course');

class School {
    constructor(name){
        this.name = name;
        this.students = [];
        this.courses = [];
    }

    addCourse(newCourse){
        // this.courses.push(course);
        if (!this.courses.some(course => course.name === newCourse.name)) {
            this.courses.push(newCourse);
        }
    }

    addStudent(student){
        // this.students.push(student);
        if (student.age() >= 6) {
            if (!this.students.includes(student)) {
                let newId = this.students.length + 1;

                while (this.students.some(student => student.getId() === newId)) {
                    newId++;
                }

                student.setId(newId);
                this.students.push(student);
            }
        }
    }

    addStudentGrade(student, course, grade){
        
    } 
}

module.exports = School;