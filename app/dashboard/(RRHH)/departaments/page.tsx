import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb'
import React from 'react'
import { TableDepartaments } from './_components'
import Link from 'next/link'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import prisma from '@/lib/prisma'

async function loadDepartaments() {
    return await prisma.departaments.findMany()
}
const Departaments = async () => {
    const { userId } = auth()

    if (!userId) redirect('/sign-in')

    const departaments = await loadDepartaments()
    console.log("🚀 ~ file: page.tsx:18 ~ Departaments ~ departaments:", departaments)

    return (
        <>
            <Breadcrumb pageName="Departamentos" />
            <div className='flex justify-end'>
                <Link
                    href={'/dashboard/departaments/new'}
                    className="inline-flex items-center justify-center gap-2.5 rounded-md bg-primary py-2 px-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-4 lg:my-4 xl:px-5"
                >
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>

                    </span>
                    Agregar Departamento
                </Link>

            </div>
            {departaments.length === 0 ? (
                <div className='flex justify-center h-[calc(100vh-14rem)] items-center text-3xl'>
                    <p className='text-slate-500'>No Se encontraron Departamentos</p>
                </div>
            ) : (
                <div className="flex flex-col gap-10">
                    <TableDepartaments />
                </div>
            )}
        </>
    )
}

export default Departaments