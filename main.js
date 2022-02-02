let student1 = new Student("Donald", "Duck", 35, "m");
let student2 = new Student("Daisy", "Duck", 30, "f");
let student3 = new Student("Huey", "Duck", 11, "m");
let student4 = new Student("Louie", "Duck", 11, "m");
let student5 = new Student("Dewey", "Duck", 11, "m");
let student6 = new Student("Della", "Duck", 32, "f");
let teacher = new Teacher("Scrooge", "Mc Duck", 80, "m", "terza media");

teacher.addStudent(student1);
teacher.addStudent(student2);
teacher.addStudent(student3);
teacher.addStudent(student4);
teacher.addStudent(student5);
teacher.addStudent(student6);

teacher.addGrade("DoDu1987", 8);
teacher.addGrade("DoDu1987", 7);
teacher.addGrade("DeDu1990", 10);
console.log(student1.grades);
console.log(teacher.toString());
console.log(teacher.bestStudent());

//console.log(student1.calculateMean());
//console.log(student1.generateCode());
//console.log(student1.toString());