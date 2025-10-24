import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const pins = await db.pin.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
    return NextResponse.json(pins, { status: 200 });
  } catch (error) {
    console.error("GET pins error", error);
    return new Response("Internal server error", { status: 500 });
  }
}
