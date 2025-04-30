import { run } from "@/lib/mongoose/mongoose";
import { NextResponse } from "next/server";

//
//
export async function GET() {
  return NextResponse.json((await run()) + " from GET");
}

export async function POST(/* request: Request */) {
  // const data = await request.json();
  console.log(await run());
  return NextResponse.json(await run());
}
