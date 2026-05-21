import dotenv from "dotenv";
dotenv.config();
import express, { type Request, type Response } from "express";
import connectDB from "./config/db";

import Task from "./models/Task";

const PORT: number = parseInt(process.env.PORT || "3000", 10);

const app = express();
app.use(express.json());
connectDB();

// 1. GET All tasks form DB
app.get("/tasks", async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({
      success: true,
      count: tasks.length,
      data: tasks,
    });
  } catch (error) {
    console.log("We got an error: ", error);
  }
});

// 2. create task
app.post("/tasks", async (req: Request, res: Response) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(201).json({
      success: true,
      data: newTask,
    });
  } catch (error) {
    console.log("we got an error while insertion", error);
  }
});

// 3. Find a task with ID
app.get("/tasks/:id", async (req: Request, res: Response) => {
  try {
    // add layer to check an object id
    const task = await Task.findById(req.params.id);

    if (!task) {
      res.status(404).json({
        success: false,
        message: "Task is not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: task,
    });
  } catch (error) {
    console.log("We got an error while retriving task", error);
  }
});

// 4. Update Task
app.put("/tasks/:id", async (req: Request, res: Response) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updatedTask) {
      res.status(404).json({
        success: false,
        error: "Task not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: updatedTask,
    });
  } catch (error) {
    console.log("we got an error for updating the task");
  }
});

// 5. Delete Task
app.delete("/tasks/:id", async (req: Request, res: Response) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);

    if (!deletedTask) {
      res.status(404).json({
        success: false,
        error: "Task not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Task Deleted successfully'
    });
  } catch (error) {
    console.log("we got an error for updating the task");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http"//localhost:${PORT}`);
});
