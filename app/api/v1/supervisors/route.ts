import prisma from "@/lib/prisma";
import { auth, useOrganizationList } from "@clerk/nextjs";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const { userId } = auth()

        if(!userId) return new NextResponse("Unauthorized", { status: 401 })

        const supervisors = await prisma.supervisors.findMany()

        if (!supervisors) return NextResponse.json('No supervisors found', { status: 404 })

        return NextResponse.json(supervisors, { status: 200 })

    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
            return NextResponse.json({ error: 'Supervisor not found' }, { status: 404 })
        }
        return NextResponse.json(error, { status: 500 })
    }
}

export async function POST(request: Request){
    try {
        const data = await request.json()

        const { userId } = auth()

        if(!userId) return new NextResponse("Unauthorized", { status: 401 })

        const supervisor = await prisma.supervisors.create({
            data
        })

        if (!supervisor) return NextResponse.json('Supervisor not created', { status: 404 })

        return NextResponse.json(supervisor, { status: 201 })
    } catch (error) {
        return NextResponse.json(error, { status: 500 })
    }
}