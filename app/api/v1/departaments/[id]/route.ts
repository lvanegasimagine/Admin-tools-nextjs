import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs";
import { Prisma, departaments } from '@prisma/client';
import { NextResponse } from "next/server";
import Departaments from '../../../../dashboard/(RRHH)/departaments/page';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const { userId } = auth()

    if (!userId) return new NextResponse("Unauthorized", { status: 401 })

    const departament = await prisma.departaments.findUnique({
      where: {
        departament_id: params.id
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

    const departament = await prisma.departaments.update({
      where: {
        departament_id: params.id
      },
      data
    })

    if (!departament) return NextResponse.json('Departament not found', { status: 404 })

    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 })
    }
    return NextResponse.json(error, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const { userId } = auth()

    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const departamentFound = await prisma.departaments.findUnique({
      where: {
        departament_id: params.id
      }
    })

    if (!departamentFound) {
      return NextResponse.json({ error: 'Departament not found' }, { status: 404 })
    }

    const departament = await prisma.departaments.delete({
      where: {
        departament_id: params.id
      }
    })

    return NextResponse.json(departament, { status: 200 })
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 })
    }
    return NextResponse.json(error, { status: 500 })
  }
}