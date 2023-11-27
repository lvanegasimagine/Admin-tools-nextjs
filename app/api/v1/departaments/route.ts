import prisma from "@/lib/prisma"
import { auth } from "@clerk/nextjs"
import { Prisma } from "@prisma/client"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        const { userId } = auth()

        if (!userId) return new NextResponse("Unauthorized", { status: 401 })

        const departaments = await prisma.departaments.findMany()

        if (!departaments) return NextResponse.json('No departaments found', { status: 404 })

        return NextResponse.json(departaments, { status: 200 })
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
            return NextResponse.json({ error: 'Project not found' }, { status: 404 })
        }
        return NextResponse.json(error, { status: 500 })
    }
}

export async function POST(request: Request) {
    try {
        const data = await request.json()

        const { userId } = auth()

        if (!userId) return new NextResponse("Unauthorized", { status: 401 })

        const departament = await prisma.departaments.create({
            data
        })

        if (!departament) return NextResponse.json('Departament not created', { status: 404 })

        return NextResponse.json(departament, { status: 201 })
    } catch (error) {
        return NextResponse.json(error, { status: 500 })
    }
}