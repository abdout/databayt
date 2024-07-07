import connectDB from "@/lib/db";
import Member from "@/components/platform/member/model";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { userId, name, dob, address, gender, rank, interest, skill, club, image, contact } = await request.json();

  await connectDB();

  const member = new Member({
    userId,
    name,
    dob,
    address,
    gender,
    rank,
    interest,
    skill,
    club,
    image,
    contact
  });

  await member.save();

  return NextResponse.json({ message: "Member Created" }, { status: 201 });
}

export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get("userId");
  await connectDB();
  const members = await Member.find({ userId });
  return NextResponse.json({ members });
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  await connectDB();
  await Member.findByIdAndDelete(id);
  return NextResponse.json({ message: "Member deleted" }, { status: 200 });
}
