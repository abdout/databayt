import connectDB from "@/lib/db";
import Member from "@/components/platform/member/model";

export default async (req, res) => {
  await connectDB();
  
  // Aggregate gender statistics
  const genderStats = await Member.aggregate([
    { $group: { _id: "$gender", count: { $sum: 1 } } }
  ]);

  // Implement similar aggregation for age and rank if needed
  
  res.json({ genderStats });
};