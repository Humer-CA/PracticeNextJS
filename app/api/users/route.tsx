import { NextRequest, NextResponse } from "next/server";

// fetch users from db
// ? if no caching remove (request: NextRequest)
export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Doe" },
    { id: 2, name: "John" },
  ]);
}
