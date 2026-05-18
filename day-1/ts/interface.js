"use strict";
const loginuser = {
    rollno: 1,
    name: 'Mahesh',
    email: "mahesh@gmail.com"
};
const task = {
    taskId: 1,
    title: "Create simple jspm college landing page using html",
    status: "Pending",
    assignedTo: loginuser
};
const printTask = (taskObject) => {
    console.log(`${task.taskId} - ${task.title}`);
};
printTask(task);
