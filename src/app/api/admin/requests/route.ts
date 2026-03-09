import { NextResponse } from "next/server";
export const runtime = 'edge';

export async function GET() {
  // Връщаме примерни данни, тъй като Cloudflare Pages не поддържа Node.js fs модула.
  return NextResponse.json({ 
    requests: [
      {
        theme: "corporate",
        victimName: "Иван Иванов",
        location: "Офиса на фирмата",
        playerName: "Инспектор Попов",
        suspects: ["Мария", "Георги"],
        receivedAt: new Date().toISOString()
      }
    ] 
  });
}
