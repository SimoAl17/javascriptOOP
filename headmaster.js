class Headmaster extends Person{
    constructor(name, surname, age, gender, school){
        super(name, surname, age, gender);
        this.school = school;
        this.teachers = [];
        }

    addTeacher(teacher){
        let hasTeacher = false;
        for (const teach of this.teachers) {
            if (teach.generateCode() === teacher.generateCode()) {
                hasTeacher = true;
            }
        }
        if (hasTeacher === false) {
            this.teachers.push(teacher);
        }
    }

    addStudentToTeacher(student, teacher){
        let hasStudent = false;
        for (const stud of teacher.students) {
            if (stud.generateCode() === student.generateCode()) {
                hasStudent = true;
            }
        }
        if (hasStudent === false) {
            teacher.students.push(student);
        }
    }

    bestTeacher(){
        let bestTeacher = teacher1.generateCode();
        let bestMean = student1.calculateMean();
        for (const teach of this.teachers) {
            for (const stud of teach.students) {
                if (bestMean < stud.calculateMean()){
                    bestMean = stud.calculateMean();
                    bestTeacher = teach.generateCode()
                }
            }    
        }
        return "Miglior insegnante: " + bestTeacher;
    }

    generateCode() {
        let code = super.generateCode();
        return code;
    }
}