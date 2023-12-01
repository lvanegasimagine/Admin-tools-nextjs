'use client'
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import ButtonLink from '@/components/Button/ButtonLink';
import { useOrganizationList } from '@clerk/nextjs';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react'
import { TableSupervisors } from './_components';

const SupervisorsPage = () => {
    const { organizationList, isLoaded, setActive } = useOrganizationList();
    const [showLoader, setShowLoader] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isLoaded) {
            const adminOrganization = organizationList.find(
                (org) => org.membership.role === 'admin'
            );
            if (!adminOrganization || adminOrganization.membership.role !== 'admin') {
                router.push('/');
            } else {
                setShowLoader(false);
            }
        }
    }, [isLoaded, organizationList]);

    return (
        <>
            <Breadcrumb pageName='Supervisores' />
            <ButtonLink href='/dashboard/supervisors/new' label='Agregar Supervisor' />
            <TableSupervisors />
        </>
    )
}

export default SupervisorsPage