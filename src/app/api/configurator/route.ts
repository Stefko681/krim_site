import { NextRequest, NextResponse } from "next/server";

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("New Configurator Request:", body);
    
    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error("Configurator API error:", error);
    return NextResponse.json({ ok: false, error: error.message || "Server error" }, { status: 500 });
  }
}

