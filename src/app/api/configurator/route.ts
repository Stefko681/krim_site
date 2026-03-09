import { NextRequest, NextResponse } from "next/server";

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("New Configurator Request:", body);
    
    // В Cloudflare Pages (Edge) нямаме достъп до локалния диск (fs).
    // За реално запазване на данни тук трябва да се върже база като Cloudflare D1, KV или Supabase.
    // За демото просто се връща успех.
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
