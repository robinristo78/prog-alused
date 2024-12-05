class Course {
    constructor(name){
        this.name = name;
        this.hinded = []; 
    }

    getGrades(){
        return this.hinded;
    }

    addGrade(student, hinne){
        this.hinded.push({student, hinne})
    } 

    getAverageGrade(){
        if (this.hinded.length === 0) return -1;
        const total = this.hinded.reduce((sum, entry) => sum + entry.grade, 0);
        return total / this.hinded.length;
    }

    description(){
        return "Course name: " + this.name + ", desc: " + this.description;
    } 
}

module.exports = Course;