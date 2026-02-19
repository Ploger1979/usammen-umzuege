import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Request from '@/models/Request';

export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await dbConnect();
        const { id } = await params;
        const request = await Request.findById(id);

        if (!request) {
            return NextResponse.json({ error: 'Anfrage nicht gefunden' }, { status: 404 });
        }

        return NextResponse.json({ success: true, request });
    } catch (error) {
        return NextResponse.json({ error: 'Fehler beim Laden', msg: String(error) }, { status: 500 });
    }
}
