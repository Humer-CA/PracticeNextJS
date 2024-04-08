import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest, { params }: { params: { id: number } }) {
  // Fetch data from a db
  // If not found, return 404 error
  // Else return data

  if (params.id > 10) return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json({ id: 1, name: "ASD" });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  return NextResponse.json(body);
}
