import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema(
  {
    title: String,
    team: [String], 
    location: String,
    date: Date,
    status: {
      type: String,
      enum: ['Undefined', 'In Progress', 'Stuck', 'Done', ], // Updated status enum
      default: 'In Progress'
    },
    priority: {
      type: String,
      enum: ['Undefined','Low', 'Medium', 'High'],
      default: 'Medium'
    },
    estTime: String,
    project: String, 
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);

export default Task;