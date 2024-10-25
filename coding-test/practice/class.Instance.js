class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
    }
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    static EnrollStudents() {
        return "ENROLLING STUDENTS!";
    }
}

let firstStudent = new Student("Colt", "Steele");
console.log(firstStudent.fullName());
console.log(Student.EnrollStudents());