import { env } from "@/lib/env";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category") || "technology";
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=1&pageSize=10&apiKey=${env.NEWS_API_KEY}`,
      { cache: "no-store" }
    );
    if (!res.ok) {
      throw new Error(`News API error: ${res.status}`);
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("API Error:", err);
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}
