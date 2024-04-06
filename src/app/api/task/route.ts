import connectDB from "@/model/connect/db";
import Task from "@/model/task/task";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { title, team, location, date, status, priority, estTime, project } = await request.json() as { title: string, team: string[], location: string, date: Date, status: string, priority: string, estTime: string, project: string };
  console.log({ title, team, location, date, status, priority, estTime, project });
  await connectDB();
  await Task.create({ title, team, location, date, status, priority, estTime, project });
  return NextResponse.json({ message: "Task Created" }, { status: 201 });
}

export async function GET() {
  await connectDB();
  const tasks = await Task.find() as unknown[];
  return NextResponse.json({ tasks });
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  await connectDB();
  await Task.findByIdAndDelete(id);
  return NextResponse.json({ message: "Task deleted" }, { status: 200 });
}