import { NextRequest, NextResponse } from "next/server";
export const runtime = 'edge';
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "requests.json");

function readRequests() {
  try {
    if (!fs.existsSync(DATA_FILE)) return [];
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
  } catch {
    return [];
  }
}

function writeRequests(data: unknown[]) {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const requests = readRequests();
    requests.push({ ...body, receivedAt: new Date().toISOString() });
    writeRequests(requests);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
