class Student{
    constructor(name, surname, age, gender){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
        this.grades = [];
    } 

    addGrade(grade){
        if (grade >= 0 && grade <= 10) {
            this.grades.push(grade);
        }
    }

    calculateMean(){
        if (this.grades.length === 0) {
            return -1;
        }
        let sum = this.grades.reduce((p, c) => p + c);
        let mean =  sum / this.grades.length;
        return mean;
    }

    generateCode() {
        let now = new Date();
        let actualYear = now.getFullYear();
        let birthYear = actualYear - this.age;
        let code = this.name[0] + this.name[1] + this.surname[0] + this.surname[1] + birthYear;
        return code;
    }

    toString() {
        let mean = this.calculateMean();

        if (mean === -1) {
            mean = "n/c";
        }

        let studentDescription = "Studente:\nNome: " + this.name + "\n"
                               + "Cognome: " + this.surname + "\n"
                               + "Età: " + this.age + "\n"
                               + "Media: " + mean;
        return studentDescription;
    }
}

