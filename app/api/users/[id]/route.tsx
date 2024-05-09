import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "../../../../prisma/client";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  // Fetch data from a db
  // If not found, return 404 error
  // Else return data
  // console.log({ id: params.id });
  console.log(params);

  try {
    const users = await prisma.user.findUnique({
      where: { id: parseInt(params.id) },
    });
    console.log("User:", users);
    // Rest of your code

    if (!users) return NextResponse.json({ error: "User not found" }, { status: 404 });
    return NextResponse.json(users);
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: number } }) {
  // Validate the request body
  const body = await request.json();
  const validation = schema.safeParse(body);
  // If invalid, return 400
  if (!validation.success) {
    return NextResponse.json({ error: validation.error.errors }, { status: 400 });
  }
  // Fetch the user with the given id
  // If doesn't exist, return 404
  if (params.id > 10) return NextResponse.json({ error: "User not found" }, { status: 404 });
  // Update the user
  // Return the updated user
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}

export function DELETE(request: NextRequest, { params }: { params: { id: number } }) {
  if (params.id > 10) return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json({ success: "User sucessfully deleted" });
}
