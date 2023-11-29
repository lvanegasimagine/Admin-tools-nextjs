'use client'
import React from 'react'
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb'
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'sonner'
import axios from 'axios'
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const NuevoDepartamento = () => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        values: {
            departament_name: '',
            departament_description: '',
            contact_email: '',
            contact_phone: '',
        }
    });

    const router = useRouter()
    const params = useParams()

    useEffect(() => {
        if (params.departamentId) {
            axios.get(`/api/v1/departaments/${params.departamentId}`).then(res => {
                reset(res.data)
            }).catch((err) => {
                console.log(err)
                toast.error('Project Not found')
                router.push('/dashboard/departaments')
                router.refresh();
            })
        }
    }, [params.departamentId])


    const onSubmit = handleSubmit(async (data) => {
        try {
            if (!params.departamentId) {
                const resp = await axios.post('/api/v1/departaments', data);
                if (resp.status === 201) {
                    toast.success("Departamento creado")
                    reset()
                    router.push('/dashboard/departaments')
                    router.refresh();
                }
            } else {
                const resp = await axios.put(`/api/v1/departaments/${params.departamentId}`, data);
                if (resp.status === 200) {
                    toast.success("Departamento actualizado")
                    reset()
                    router.push('/dashboard/departaments')
                    router.refresh();
                }
            }
        } catch (error) {
            console.error('🚀 ~ file: page.tsx:20 ~ onSubmit ~ error:', error)
        }
    })
    return (
        <>
            <Breadcrumb pageName={params.departamentId ? 'Editar Departamento' : 'Nuevo Departamento'} />
            <div className="w-full flex flex-col gap-9">
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="flex justify-between items-center border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                        <h3 className="font-medium text-black dark:text-white">
                            Rellenar Formato
                        </h3>
                        <h3 className="font-medium text-black dark:text-white text-sm">
                            <span className='text-danger text-lg'>*</span> obligatorio
                        </h3>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className="p-6.5">
                            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        <span className='text-danger'>*</span> Nombre Departamento
                                    </label>
                                    <Controller control={control} name='departament_name' rules={{ required: { message: 'Este campo es requerido', value: true } }} render={({ field }) => (
                                        <input
                                            type="text"
                                            autoFocus
                                            {...field}
                                            placeholder="Ejp: Administracion, Area Tecnica, etc"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        />)} />
                                    {errors.departament_name && <p className='text-xs text-danger mt-2 mx-4 font-medium'>{errors.departament_name.message}</p>}

                                </div>

                                {/*  */}
                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Descripcion Departamento
                                    </label>
                                    <Controller control={control} name='departament_description' render={({ field }) => (
                                        <input
                                            type="text"
                                            {...field}
                                            placeholder="Ejp: Recursos Humanos Departamento..."
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        />)} />
                                    {errors.departament_description && <p className='text-xs text-danger mt-2 mx-4 font-medium'>{errors.departament_description.message}</p>}
                                </div>
                            </div>
                            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Email
                                    </label>
                                    <Controller control={control} name='contact_email' render={({ field }) => (
                                        <input
                                            type="email"
                                            {...field}
                                            placeholder="Ejp: nombre@corasco.com.ni"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        />)} />
                                    {errors.contact_email && <p className='text-xs text-danger mt-2 mx-4 font-medium'>{errors.contact_email.message}</p>}
                                </div>

                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Numero Telefonico o Extension
                                    </label>
                                    <Controller control={control} name='contact_phone' render={({ field }) => (
                                        <input
                                            type="text"
                                            {...field}
                                            placeholder="Ejp: 5432-6532 Ext. 1015"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        />)} />
                                    {errors.contact_phone && <p className='text-xs text-danger mt-2 mx-4 font-medium'>{errors.contact_phone.message}</p>}
                                </div>
                            </div>

                            <div className='flex justify-center items-center mx-5 py-5 gap-5'>
                                <button type='submit' className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                                    <span className='mr-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                        </svg>

                                    </span>
                                    {params.departamentId ? 'Actualizar' : 'Guardar'}
                                </button>
                                <button type="button" onClick={() => router.back()} className="flex w-full justify-center rounded bg-danger p-3 font-medium text-gray">
                                    <span className='mr-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                        </svg>
                                    </span>
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default NuevoDepartamento