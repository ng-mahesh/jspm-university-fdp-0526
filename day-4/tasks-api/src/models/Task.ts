import mongoose, { Document, Schema } from "mongoose";

interface ITask extends Document {
  title: string;
  completed: boolean;
}

const taskSchema = new Schema<ITask>(
  {
    title: {
      type: String,
      required: [true, "Task is required"],
      maxLength: [50, "Title must be in between 1-50 char"],
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);


const Task = mongoose.model('task', taskSchema);

export default Task;