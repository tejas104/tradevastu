import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase-server';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, company, requirements } = body;

        if (!name || !email) {
            return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
        }

        const { data, error } = await supabaseServer
            .from('support_proposals')
            .insert([{ name, email, company, requirements }])
            .select();

        if (error) {
            console.error('Supabase error:', error);
            return NextResponse.json({ error: 'Failed to save proposal' }, { status: 500 });
        }

        return NextResponse.json({ success: true, data }, { status: 200 });
    } catch (err) {
        console.error('API error:', err);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
