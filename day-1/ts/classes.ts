class Student{
    studentId: number;
    name: string;
    course: string;

    constructor(studentId: number, name: string, course:string){
        this.studentId = studentId;
        this.name = name;
        this.course = course;
    }

    printStudent(): string{
        return `Student Data: ${this.studentId} - ${this.name} - ${this.course}`;
    }
}

const studentObj = new Student(1, "Mahesh", "IT");
console.log(studentObj.printStudent());
