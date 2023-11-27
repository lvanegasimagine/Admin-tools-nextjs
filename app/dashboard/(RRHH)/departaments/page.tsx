import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb'
import React from 'react'
import { TableDepartaments } from './_components'
import Link from 'next/link'

const Departaments = () => {
    return (
        <>
            <Breadcrumb pageName="Departaments" />
            <div className='flex justify-end'>
            <Link
                href={'/dashboard/departaments/new'}
                className="inline-flex items-center justify-center gap-2.5 rounded-md bg-primary py-2 px-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-4 lg:my-4 xl:px-5"
            >
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>

                </span>
                Agregar Departamento
            </Link>

            </div>
            <div className="flex flex-col gap-10">
                <TableDepartaments />
            </div>
        </>
    )
}

export default Departaments