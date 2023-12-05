'use client'
import Loading from '@/app/dashboard/tables/Loading'
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb'
import axios from 'axios'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'

const NuevoSupervisor = () => {
    const { control, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
        values: {
            first_name: '',
            last_name: '',
            email: '',
            phone_number: ''
        }
    })
    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()
    const params = useParams()

    useEffect(() => {
        setIsLoading(true)
        if (params.supervisorId) {
            axios.get(`/api/v1/supervisors/${params.supervisorId}`).then((res) => {
                console.log(res.data)
                reset(res.data)
                setIsLoading(false)
            }).catch((err) => {
                console.log(err)
                toast.error('Supervisor Not found')
                router.push('/dashboard/supervisors')
                router.refresh();
            })
        }
    }, [params.supervisorId])

    if (isLoading && params.supervisorId) {
        return <Loading />
    }

    const onSubmit = handleSubmit(async (data) => {
        try {
            setIsLoading(true)
            if(!params.supervisorId){
                const resp = await axios.post('/api/v1/supervisors', data)
                if(resp.status === 201){
                    toast.success('Supervisor created successfully')
                    reset()
                    router.push('/dashboard/supervisors')
                    router.refresh();
                }
            }else{
                const resp = await axios.put(`/api/v1/supervisors/${params.supervisorId}`, data)

                if(resp.status === 200){
                    toast.info('Supervisor updated successfully')
                    reset()
                    router.push('/dashboard/supervisors')
                    router.refresh();
                }
            }
        } catch (error) {
            console.error(error)
        }
    })
    return (
        <>
            <Breadcrumb pageName={params.supervisorId ? 'Editar Supervisor' : 'Nuevo Supervisor'} />
            <div className="w-full flex flex-col gap-9">
                <div className='rounded-md border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
                    <div className="flex justify-between items-center border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                        <h3 className="font-medium text-black dark:text-white">
                            Rellenar Formato
                        </h3>
                        <h3 className="font-medium text-black dark:text-white text-sm">
                            <span className='text-danger text-lg'>*</span> Obligatorio
                        </h3>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className="p-6.5">
                            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        <span className='text-danger'>*</span> Nombre Supervisor
                                    </label>
                                    <Controller control={control} name='first_name' rules={{ required: { message: 'Este campo es requerido', value: true } }} render={({ field }) => (
                                        <input
                                            type="text"
                                            autoFocus
                                            {...field}
                                            placeholder="Ejp: John..."
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        />)} />
                                    {errors.first_name && <p className='text-xs text-danger mt-2 mx-4 font-medium'>{errors.first_name.message}</p>}
                                </div>
                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        <span className='text-danger'>*</span> Apellido Supervisor
                                    </label>
                                    <Controller control={control} name='last_name' rules={{ required: { message: 'Este campo es requerido', value: true } }} render={({ field }) => (
                                        <input
                                            type="text"
                                            {...field}
                                            placeholder="Ejp: Doe..."
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        />)} />
                                    {errors.last_name && <p className='text-xs text-danger mt-2 mx-4 font-medium'>{errors.last_name.message}</p>}
                                </div>
                            </div>
                            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        <span className='text-danger'>*</span> Email
                                    </label>
                                    <Controller control={control} name='email' rules={{ required: { message: 'Este campo es requerido', value: true } }} render={({ field }) => (
                                        <input
                                            type="text"
                                            {...field}
                                            placeholder="Ejp: email@domain.com"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        />)} />
                                    {errors.email && <p className='text-xs text-danger mt-2 mx-4 font-medium'>{errors.email.message}</p>}
                                </div>
                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        <span className='text-danger'>*</span> Telefono
                                    </label>
                                    <Controller control={control} name='phone_number' rules={{ required: { message: 'Este campo es requerido', value: true } }} render={({ field }) => (
                                        <input
                                            type="text"
                                            {...field}
                                            placeholder="Ejp: 1265-8932 Ext.1015"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        />)} />
                                    {errors.phone_number && <p className='text-xs text-danger mt-2 mx-4 font-medium'>{errors.phone_number.message}</p>}
                                </div>
                            </div>
                            <div className='flex justify-center items-center mx-5 py-5 gap-5'>
                                <button type='submit' className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray" disabled={isSubmitting}>
                                    <span className='mr-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                        </svg>
                                    </span>
                                    {params.supervisorId ? 'Actualizar' : 'Guardar'}
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

export default NuevoSupervisor