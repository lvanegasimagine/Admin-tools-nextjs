import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb'
import React from 'react'
import { TableDepartaments } from './_components'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import ButtonLink from '@/components/Button/ButtonLink'

const DepartamentsPage = async () => {
    const { userId } = auth()

    if (!userId) redirect('/sign-in')

    return (
        <>
            <Breadcrumb pageName="Departamentos" />
            <ButtonLink href='/dashboard/departaments/new' label='Agregar Departamento'/>
            <TableDepartaments />
        </>
    )
}

export default DepartamentsPage