import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "../../../prisma/client";

// fetch users from db
// ? if no caching remove (request: NextRequest
export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 });

  const user = await prisma.user.findUnique({ where: body.email });
  if (user) NextResponse.json({ error: "Email already exists" }, { status: 400 });

  const createUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(createUser, { status: 201 });
}
