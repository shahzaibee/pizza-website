import { NextRequest, NextResponse } from "next/server";

export function POST(req: NextRequest) {
  return NextResponse.json("Ok");
}
