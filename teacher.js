class Teacher extends Person{
    constructor(name, surname, age, gender, degree){
        super(name, surname, age, gender);
        this.degree = degree;
        this.students = []; 
    }

    toString(){
        let myClass = "Insegnante:\nNome: " + this.name + "\n"
                               + "Cognome: " + this.surname + "\n"
                               + "Età: " + this.age + "\n"
                               + "Sesso: " + this.gender + "\n"
                               + "Titolo di studio: " + this.degree;
        for (const stud of this.students) {
            myClass += "\n\n" + stud.toString();
        }
        return myClass;
    }

    addStudent(student){
        let hasStudent = false;
        for (const stud of this.students) {
            if (stud.generateCode() === student.generateCode()) {
                hasStudent = true;
            }
        }
        if (hasStudent === false) {
            this.students.push(student);
        }
    }

    addGrade(studentCode, grade){
        for (const stud of this.students) {
            if (studentCode === stud.generateCode()) {
                stud.addGrade(grade);
            }
        }
    }

    generateCode() {
        let now = new Date();
        let actualYear = now.getFullYear();
        let birthYear = actualYear - this.age;
        let code = this.name[0] + this.name[1] + this.surname[0] + this.surname[1] + birthYear;
        return code;
    }

    bestStudent(){
        let bestStudent = student1.generateCode();
        let bestMean = student1.calculateMean();
        for (const stud of this.students) {
            if (bestMean < stud.calculateMean()){
                bestMean = stud.calculateMean();
                bestStudent = stud.generateCode()
            }
        }
        return "Miglior studente: " + bestStudent;
    }
}