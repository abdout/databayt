// MongoDB operations
import connectDB from "@/model/connect/db";
import Header from "@/model/report/header";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { customer, consultant, client, description, projectName, date, location, tag, sheet } = await request.json();
  await connectDB();

  // Create a new record or update the existing one
  const header = await Header.findOneAndUpdate({}, { customer, consultant, client, description, projectName, date, location, tag, sheet }, { upsert: true, new: true });

  return NextResponse.json({ message: "Report Created/Updated", header }, { status: 201 });
}

export async function GET() {
  await connectDB();
  const headers = await Header.find();
  return NextResponse.json({ headers });
}
