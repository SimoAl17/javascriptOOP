let student1 = new Student("Donald", "Duck", 35, "m");      //DoDu1987
let student2 = new Student("Daisy", "Duck", 30, "f");       //DaDu1992
let student3 = new Student("Huey", "Duck", 11, "m");        //HuDu2011
let student4 = new Student("Louie", "Duck", 11, "m");       //LoDu2011
let student5 = new Student("Dewey", "Duck", 11, "m");       //DeDu2011
let student6 = new Student("Della", "Duck", 32, "f");       //DeDu1990
let teacher1 = new Teacher("Scrooge", "Mc Duck", 80, "m", "terza media");           //Studenti: Donald e Louie
let teacher2 = new Teacher("Eikichi", "Onizuka", 22, "m", "terza media");           //Studenti: Daisy e Della
let teacher3 = new Teacher("Andrea", "Asioli", 40, "m", "quinta superiore");        //Studenti: Huey
let teacher4 = new Teacher("Baldi", "Baldimore", 45, "m", "quinta elementare");     //Studenti: Dewey
let headmaster = new Headmaster("Albus", "Dumbledore", 150, "m", "Hogwarts"); 


headmaster.addTeacher(teacher1);
headmaster.addTeacher(teacher2);
headmaster.addTeacher(teacher3);
headmaster.addTeacher(teacher4);
headmaster.addStudentToTeacher(student1, teacher1);
headmaster.addStudentToTeacher(student2, teacher2);
headmaster.addStudentToTeacher(student3, teacher3);
headmaster.addStudentToTeacher(student4, teacher1);
headmaster.addStudentToTeacher(student5, teacher4);
headmaster.addStudentToTeacher(student6, teacher2);

teacher1.addGrade("LoDu2011", 8);
teacher1.addGrade("LoDu2011", 7);
teacher1.addGrade("DoDu1987", 5);
teacher2.addGrade("DaDu1992", 9);
teacher2.addGrade("DeDu1990", 9);
teacher2.addGrade("DeDu1990", 10);
teacher3.addGrade("HuDu2011", 8);
teacher4.addGrade("DeDu2011", 4);
//console.log(student1.grades);
console.log(teacher1.toString());
console.log(teacher2.toString());
console.log(teacher3.toString());
console.log(teacher4.toString());
//console.log(teacher1.generateCode());
console.log(headmaster.bestTeacher());
console.log(headmaster.generateCode());


//console.log(student1.calculateMean());
//console.log(student1.generateCode());
//console.log(student1.toString());