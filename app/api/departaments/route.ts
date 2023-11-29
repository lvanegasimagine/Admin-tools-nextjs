import prisma from "@/lib/prisma"
import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"
import { Prisma } from "@prisma/client"

// export async function GET() {
//     try {
//         const { userId } = auth()

//         if (!userId) return new NextResponse("Unauthorized", { status: 401 })

//         const departaments = await prisma.departaments.findMany()

//         if (!departaments) return NextResponse.json('No departaments found', { status: 404 })

//         return NextResponse.json(departaments, { status: 200 })
//     } catch (error) {
//         if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
//             return NextResponse.json({ error: 'Project not found' }, { status: 404 })
//         }
//         return NextResponse.json(error, { status: 500 })
//     }
// }

export async function GET() {
    try {
        const { userId } = auth()

        if (!userId) return new NextResponse("Unauthorized", { status: 401 })

        const departaments = await prisma.departaments.findMany();

        if (!departaments) return NextResponse.json('No departaments found', { status: 404 })

        return NextResponse.json(departaments, { status: 200 })
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                {
                    message: error.message,
                },
                {
                    status: 500,
                }
            );
        }
    }
}