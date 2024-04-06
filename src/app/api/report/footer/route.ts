import connectDB from "@/model/connect/db";
import Footer from "@/model/report/footer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const {
    contractor,
    customer,
    consultant,
    contractorName,
    customerName,
    consultantName,
    contractorSignature,
    customerSignature,
    consultantSignature,
  } = await request.json();
  await connectDB();

  // Create a new record or update the existing one
  const footer = await Footer.findOneAndUpdate(
    {},
    {
      contractor,
      customer,
      consultant,
      contractorName,
      customerName,
      consultantName,
      contractorSignature,
      customerSignature,
      consultantSignature,
    },
    { upsert: true, new: true }
  );

  return NextResponse.json(
    { message: "Report Created/Updated", footer },
    { status: 201 }
  );
}

export async function GET() {
  await connectDB();
  const footers = await Footer.find();
  return NextResponse.json({ footers });
}