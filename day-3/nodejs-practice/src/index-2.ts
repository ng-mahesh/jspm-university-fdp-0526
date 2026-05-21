import express, { type Request, type Response } from "express";

const app = express();
const PORT = 3005;

// built in middleware to parse request body JSoN data
app.use(express.json());

// Mock Data (tasks)
let tasks = [
  { id: 1, title: "Task 1 - Learn JavaScript", isCompleted: false },
  { id: 2, title: "Task 2 - Learn React", isCompleted: false },
];

// 1. Get all tasks
app.get("/tasks", (req: Request, res: Response) => {
  res.json({
    success: true,
    data: tasks,
  });
});

// 2. Get a single task
app.get("/tasks/:id", (req: Request, res: Response) => {
  // extract the task id from the url or route and also convert the id into number
  const taskID = req.params.id as string;
  const task = tasks.find((t) => t.id === parseInt(taskID));

  if (!task) {
    return res.status(404).json({
      success: false,
      message: "Task not found",
    });
  }

  res.json({
    success: true,
    data: task,
  });
});

// 3. Create a new Task
app.post("/tasks", (req: Request, res: Response) => {
  const { title } = req.body;

  if (!title) {
    return res.status(404).json({
      success: false,
      message: "Title is required",
    });
  }

  // create a new task object
  const newTask = {
    id: tasks.length ? (tasks[tasks.length - 1]?.id ?? 0) + 1 : 1,
    title: title,
    isCompleted: false,
  };

  tasks.push(newTask);

  res.json({
    success: true,
    data: newTask,
  });
});

// 4. Delete a task
app.delete("/tasks/:id", (req: Request, res: Response) => {
  const taskId = req.params.id as string;
  const initLength = tasks.length;

  tasks = tasks.filter((t) => t.id !== parseInt(taskId));
  if (tasks.length === initLength) {
    return res.json({
      success: false,
      message: "Task not found, not deleted",
    });
  }

  res.json({
    success: true,
    message: "Task deleted successfully!",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
