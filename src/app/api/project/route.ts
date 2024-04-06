import connectDB from "@/model/connect/db";
import Project from "@/model/project/project";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { customer, description, location, consultant, client, status, voltages, lvOptions, mvOptions, hvOptions, evOptions } = await request.json() as { customer: string, description: string, location: string, consultant: string, client: string, status: string, voltages: { LV: boolean, MV: boolean, HV: boolean, EV: boolean }, lvOptions: { lvSwgr: { label: string, value: string }[], lvTrafo: { label: string, value: string }[], lvCable: { label: string, value: string }[], lvRmu: { label: string, value: string }[] }, mvOptions: { mvSwgr: { label: string, value: string }[], mvTrafo: { label: string, value: string }[], mvCable: { label: string, value: string }[], mvRmu: { label: string, value: string }[] }, hvOptions: { hvSwgr: { label: string, value: string }[], hvTrafo: { label: string, value: string }[], hvCable: { label: string, value: string }[], hvRmu: { label: string, value: string }[] }, evOptions: { evSwgr: { label: string, value: string }[], evTrafo: { label: string, value: string }[], evCable: { label: string, value: string }[], evRmu: { label: string, value: string }[] } };
  console.log({ customer, description, location, consultant, client, status, voltages, lvOptions, mvOptions, hvOptions, evOptions });
  await connectDB();
  await Project.create({ customer, description, location, consultant, client, status, voltages, lvOptions, mvOptions, hvOptions, evOptions });
  return NextResponse.json({ message: "Project Created" }, { status: 201 });
}

export async function GET() {
  await connectDB();
  const projects = await Project.find() as unknown[];
  return NextResponse.json({ projects });
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  await connectDB();
  await Project.findByIdAndDelete(id);
  return NextResponse.json({ message: "Project deleted" }, { status: 200 });
}