import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;
const ipHits = new Map<string, { count: number; start: number }>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const record = ipHits.get(ip);
  if (!record || now - record.start > WINDOW_MS) {
    ipHits.set(ip, { count: 1, start: now });
    return false;
  }
  if (record.count >= MAX_REQUESTS) return true;
  record.count += 1;
  ipHits.set(ip, record);
  return false;
}

export async function POST(req: NextRequest) {
  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json(
        { error: "Server configuration missing: set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY." },
        { status: 500 }
      );
    }

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (process.env.NODE_ENV !== "development" && isRateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests. Please try again in a minute." }, { status: 429 });
    }

    const body = await req.json();
    const {
      fullName,
      businessEmail,
      companyName,
      phoneNumber,
      industry,
      companySize,
      projectScope,
      budgetRange,
      projectDetails,
      website,
    } = body;

    if (website) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    if (!fullName || !businessEmail || !companyName || !phoneNumber || !projectScope) {
      return NextResponse.json({ error: "Required fields are missing" }, { status: 400 });
    }

    const { error } = await supabaseServer.from("contact_inquiries").insert([
      {
        full_name: fullName,
        email: businessEmail,
        company: companyName,
        phone: phoneNumber,
        industry,
        company_size: companySize,
        project_scope: projectScope,
        budget_range: budgetRange,
        details: projectDetails,
        status: "new",
      },
    ]);

    if (error) {
      console.error("contact_inquiries insert error:", error);
      return NextResponse.json({ error: error.message || "Failed to save inquiry" }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("contact_inquiries route error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
