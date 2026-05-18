export interface User{
    rollno: number,
    name: string,
    email: string
}

interface Task{
    taskId: number,
    title: string,
    status: "Pending" | "In Progress" | "Completed"
    assignedTo: User
}


const loginuser:User = {
    rollno: 1,
    name: 'Mahesh',
    email: "mahesh@gmail.com"
}

const task: Task ={
    taskId: 1,
    title: "Create simple jspm college landing page using html",
    status: "Pending",
    assignedTo: loginuser
}

const printTask = (taskObject: Task) =>{
    console.log(`${task.taskId} - ${task.title}`);    
}

printTask(task);