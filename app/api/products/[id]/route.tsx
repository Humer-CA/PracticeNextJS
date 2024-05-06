import { NextRequest, NextResponse } from "next/server";
import schema from "../../products/schema";

export async function PUT(request: NextRequest, { params }: { params: { id: number } }) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) return NextResponse.json({ error: validation.error.errors }, { status: 400 });
  if (params.id > 10) return NextResponse.json({ error: "Product not found" }, { status: 404 });
  return NextResponse.json({ id: 3, name: body.name, price: body.price }, { status: 200 });
}

export function DELETE(request: NextRequest, { params }: { params: { id: number } }) {
  if (params.id > 10) return NextResponse.json({ error: "Product not found" }, { status: 404 });
  return NextResponse.json({ success: "Product sucessfully deleted" });
}
