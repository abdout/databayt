import connectDB from "@/model/connect/db";
import Task from "@/model/task/task";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const { newTitle: title, newTeam: team, newLocation: location, newDate: date, newStatus: status, newPriority: priority, newEstTime: estTime, newProject: project } = await request.json() as { newTitle: string, newTeam: string[], newLocation: string, newDate: Date, newStatus: string, newPriority: string, newEstTime: string, newProject: string };
  await connectDB();
  await Task.findByIdAndUpdate(id, { title, team, location, date, status, priority, estTime, project });
  return NextResponse.json({ message: "Task updated" }, { status: 200 });
}

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  await connectDB();
  const task = await Task.findOne({ _id: id });
  return NextResponse.json({ task }, { status: 200 });
}