import { db } from "@/lib/db";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, description, type, content } = body;

    if (!title) {
      return new NextResponse("Title is required", { status: 400 });
    }
    if (!description) {
      return new NextResponse("Description is required", { status: 400 });
    }
    if (!type) {
      return new NextResponse("Type is required", { status: 400 });
    }
    if (!content) {
      return new NextResponse("Content is required", { status: 400 });
    }

    const pin = await db.pin.create({
      data: {
        title,
        description,
        type,
        content,
      },
    });

    return NextResponse.json(pin, { status: 201 });
  } catch (error) {
    console.error("POST pin error", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
