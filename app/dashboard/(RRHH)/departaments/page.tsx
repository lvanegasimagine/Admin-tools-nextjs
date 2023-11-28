import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb'
import React from 'react'
import { TableDepartaments } from './_components'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
// import prisma from '@/lib/prisma'
import ButtonLink from '@/components/Button/ButtonLink'

// async function loadDepartaments() {
//     const departaments = await prisma.departaments.findMany()

//     if(!departaments) return;

//     return departaments
// }
const Departaments = async () => {
    const { userId } = auth()

    if (!userId) redirect('/sign-in')

    // const departaments = await loadDepartaments()

    return (
        <>
            <Breadcrumb pageName="Departamentos" />
            <ButtonLink href='/dashboard/departaments/new' label='Agregar Departamento'/>
            <TableDepartaments />
            {/* {departaments?.length === 0 ? (
                <div className='flex justify-center h-[calc(100vh-14rem)] items-center text-3xl'>
                    <p className='text-slate-500'>No Se encontraron Departamentos</p>
                </div>
            ) : (
                <div className="flex flex-col gap-10">
                </div>
            )} */}
        </>
    )
}

export default Departaments