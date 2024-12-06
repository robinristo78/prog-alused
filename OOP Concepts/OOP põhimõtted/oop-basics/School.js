const Student = require('./Student');
const Course = require('./Course');

class School {
    constructor(name){
        this.name = name;
        this.ageMin = 6;
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
        if (student.age() >= this.ageMin) {
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
        if (this.students.includes(student) && this.courses.includes(course)) {
            student.addGrade(course, grade);
            course.addGrade(student, grade);
        }
    }

    getStudents(){
        return this.students;
    }

    getCourses(){
        return this.courses;
    }

    getStudentsOrderedByAverageGrade(){
        return [...this.students].sort((a, b) => b.getAverageGrade() - a.getAverageGrade());
    }
}

module.exports = School;