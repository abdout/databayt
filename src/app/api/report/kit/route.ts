import connectDB from "@/model/connect/db";
import Kit from "@/model/report/kit";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const {
    equipment,
    serial,
    date,
    equipment1,
    serial1,
    date1,
    equipment2,
    serial2,
    date2,
    equipment3,
    serial3,
    date3,
  } = await request.json();
  await connectDB();

  const kit = await Kit.findOneAndUpdate(
    {},
    {
      equipment: equipment,
      serial: serial,
      date: date,
      equipment1: equipment1,
      serial1: serial1,
      date1: date1,
      equipment2: equipment2,
      serial2: serial2,
      date2: date2,
      equipment3: equipment3,
      serial3: serial3,
      date3: date3,
    },
    { upsert: true, new: true }
  );

  return NextResponse.json(
    { message: "Report Created/Updated", kit },
    { status: 201 }
  );
}

export async function GET() {
  await connectDB();
  const kits = await Kit.find();
  return NextResponse.json({ kits });
}