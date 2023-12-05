import prisma from "@/lib/prisma"
import { auth } from "@clerk/nextjs"
import { Prisma } from "@prisma/client"
import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
        const { userId } = auth()

        if (!userId) return new NextResponse("Unauthorized", { status: 401 })

        const departament = await prisma.supervisors.findUnique({
            where: {
                supervisor_id: params.id
            }
        })

        if (!departament) return NextResponse.json('Departament not found', { status: 404 })

        return NextResponse.json(departament, { status: 200 })
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
            return NextResponse.json({ error: 'Project not found' }, { status: 404 })
        }
        return NextResponse.json(error, { status: 500 })
    }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    try {
        const { userId } = auth()

        if (!userId) return new NextResponse("Unauthorized", { status: 401 })

        const data = await request.json()

        const supervisor = await prisma.supervisors.update({
            where: {
                supervisor_id: params.id
            },
            data
        })

        if (!supervisor) return NextResponse.json('Supervisor not found', { status: 404 })

        return NextResponse.json(data, { status: 200 })

    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
            return NextResponse.json({ error: 'Supervisor not found' }, { status: 404 })
        }
        return NextResponse.json(error, { status: 500 })
    }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        const { userId } = auth()

        if (!userId) return new NextResponse("Unauthorized", { status: 401 })

        const supervisorFound = await prisma.supervisors.findUnique({
            where: {
                supervisor_id: params.id
            }
        })

        if (!supervisorFound) {
            return NextResponse.json({ error: 'Supervisor not found' }, { status: 404 })
        }

        const supervisor = await prisma.supervisors.delete({
            where: {
                supervisor_id: params.id
            }
        })

        return NextResponse.json(supervisor, { status: 200 })
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
            return NextResponse.json({ error: 'Supervisor not found' }, { status: 404 })
        }
        return NextResponse.json(error, { status: 500 })
    }
}