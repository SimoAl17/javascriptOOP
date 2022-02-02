class Teacher {
    constructor(name, surname, age, gender, degree){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
        this.degree = degree;
        this.students = [];
    }

    toString(){
        let myClass = "Nome: " + this.name + "\n"
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

    bestStudent(){
        let bestStudent = student1.generateCode();
        let bestMean = student1.calculateMean();
        for (const stud of this.students) {
            if (bestMean < stud.calculateMean()){
                bestMean = stud.calculateMean();
                bestStudent = stud.generateCode()
            }
        }
        return bestStudent;
    }
}