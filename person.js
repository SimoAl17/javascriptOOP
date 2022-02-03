class Person{
    constructor(name, surname, age, gender){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
    }

    generateCode() {
        let now = new Date();
        let actualYear = now.getFullYear();
        let birthYear = actualYear - this.age;
        let code = this.name[0] + this.name[1] + this.surname[0] + this.surname[1] + birthYear;
        return code;
    }
}