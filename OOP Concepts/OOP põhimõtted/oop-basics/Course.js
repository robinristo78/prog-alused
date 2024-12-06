class Course {
    constructor(name){
        this.name = name;
        this.hinded = []; 
    }

    getGrades(){
        return this.hinded;
    }

    addGrade(student, grade){
        this.hinded.push({student, grade})
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
        return "Course name: " + this.name + ", desc: " + this.description;
    } 
}

module.exports = Course;