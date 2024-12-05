class Person {
    constructor(name){
        this.name = name;
        this.desc = "";
    }

    setDateOfBirth(year){
        this.birthyear = year;
    }

    getDateOfBirth(){
        if (this.birthyear !== undefined) { 
            return this.birthyear;
        }
        else {
            return null;
        } 
    }

    age(){
        if (!this.birthyear) return null;

        const currentYear = new Date().getFullYear();
        
        return currentYear - this.birthyear;
    }

    getName(){
        return this.name;
    }

    description(){
        return "Name: " + this.name + ", Desc: " + this.desc;
    } 
}

module.exports = Person;