import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Request from '@/models/Request';
import { z } from 'zod';

const requestSchema = z.object({
    customer: z.object({
        firstName: z.string().min(1, "Vorname ist erforderlich"),
        lastName: z.string().min(1, "Nachname ist erforderlich"),
        phone: z.string().min(1, "Telefonnummer ist erforderlich"),
        email: z.string().email("Ungültige E-Mail-Adresse"),
    }),
    moveType: z.enum(['privat', 'firma']).optional().default('privat'),
    services: z.array(z.string()).optional().default([]),
    addresses: z.object({
        from: z.string().optional().default(''),
        to: z.string().optional().default(''),
    }).optional().default({ from: '', to: '' }),
    details: z.object({
        floorsFrom: z.number().optional(),
        floorsTo: z.number().optional(),
        elevatorFrom: z.boolean().optional(),
        elevatorTo: z.boolean().optional(),
        parking: z.boolean().optional(),
        assembly: z.boolean().optional(),
        date: z.string().nullable().optional(),
    }).optional().default({}),
    items: z.array(z.object({
        key: z.string(),
        qty: z.number(),
        size: z.object({
            length: z.number().optional(),
            width: z.number().optional(),
            height: z.number().optional(),
            depth: z.number().optional(),
        }).optional(),
        label: z.string().optional()
    })).optional().default([]),
    message: z.string().optional(),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const result = requestSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json({ error: 'Validierungsfehler', details: result.error.format() }, { status: 400 });
        }

        await dbConnect();

        // Transform date string to Date object if present
        const details: any = { ...result.data.details };
        if (details.date) {
            details.date = new Date(details.date);
        }

        const newRequest = await Request.create({
            ...result.data,
            details
        });

        return NextResponse.json({ success: true, id: newRequest._id }, { status: 201 });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Interner Serverfehler', msg: String(error) }, { status: 500 });
    }
}

export async function GET() {
    try {
        await dbConnect();
        const requests = await Request.find({}).sort({ createdAt: -1 });
        return NextResponse.json({ success: true, requests });
    } catch (error) {
        return NextResponse.json({ error: 'Fehler beim Laden', msg: String(error) }, { status: 500 });
    }
}
