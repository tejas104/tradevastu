import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase-server';

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 8;
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
            return NextResponse.json({ error: "Too many requests. Please try again shortly." }, { status: 429 });
        }

        const body = await req.json();
        const { name, email, phone, company, message, source, website } = body;

        if (website) {
            return NextResponse.json({ success: true }, { status: 200 });
        }

        if (!name || !email) {
            return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
        }

        const { data, error } = await supabaseServer
            .from('leads')
            .insert([{ full_name: name, email, phone, company, message, source: source || 'general' }])
            .select();

        if (error) {
            console.error('Supabase error:', error);
            return NextResponse.json({ error: error.message || 'Failed to save lead' }, { status: 500 });
        }

        return NextResponse.json({ success: true, data }, { status: 200 });
    } catch (err) {
        console.error('API error:', err);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
