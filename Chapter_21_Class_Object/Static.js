class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
    static NameCourse = "Playwright";
    static Mentor_Name = "Pramod Dutta";

}
const a1 = new Student("Aman", "28");
const a2 = new Student("Ajit", "32")
console.log(a1.name, a1.age);
console.log(a2.name, a2.age)
console.log(Student.Mentor_Name);
console.log(Student.NameCourse);