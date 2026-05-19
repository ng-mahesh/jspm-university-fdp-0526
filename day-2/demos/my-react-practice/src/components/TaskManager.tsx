import React, { useState } from "react";
import TaskItem from "./TaskItem";

interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}

const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Learn React", isCompleted: false },
    { id: 2, title: "Learn NodeJS", isCompleted: false },
    { id: 3, title: "Learn GitHub", isCompleted: true },
  ]);

  const handleToggleTask = (taskId: number) => {
    const updatedTask = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    setTasks(updatedTask);
  };
  return (
    <div>
      <h2>My Task Manager</h2>
      <div>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            title={task.title}
            isCompleted={task.isCompleted}
            onToggleComplete={handleToggleTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskManager;
