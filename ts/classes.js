"use strict";
class Student {
    studentId;
    name;
    course;
    constructor(studentId, name, course) {
        this.studentId = studentId;
        this.name = name;
        this.course = course;
    }
    printStudent() {
        return `Student Data: ${this.studentId} - ${this.name} - ${this.course}`;
    }
}
const studentObj = new Student(1, "Mahesh", "IT");
console.log(studentObj.printStudent());
