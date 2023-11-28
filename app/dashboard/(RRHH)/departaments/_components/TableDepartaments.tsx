"use client"
import * as React from "react"
import { ColumnFiltersState, SortingState, VisibilityState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import axios from "axios"
import { columns } from "."
import { ButtonDepartaments } from "./"
import InputDropdownDepartaments from "./InputDropdownDepartaments"

// Luis Vanegas
export default function DepartamentsPage() {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})
    const [data, setData] = React.useState([])
    const [error, setError] = React.useState(false)
    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    React.useEffect(() => {
        getDepartamentos()
    }, [])

    async function getDepartamentos() {
        try {
            const { status, statusText, data } = await axios.get(`/api/v1/departaments`);

            if (status === 200 && statusText === 'OK') {
                setData(data)
            } else {
                setError(true)
            }
        } catch (error: any) {
            // Manejar el error aquí
            if (error.response) {
                // La solicitud fue hecha y el servidor respondió con un estado diferente de 2xx
                console.error('Respuesta del servidor con error:', error.response.data);
                console.error('Código de estado:', error.response.status);
            } else if (error.request) {
                // La solicitud fue hecha pero no se recibió respuesta
                console.error('No se recibió respuesta del servidor:', error.request);
                setError(true)
            } else {
                // Ocurrió un error durante la solicitud
                console.error('Error en la solicitud:', error.message);
                setError(true)
            }
        }
    }

    if (error) {
        return (
            <div className='flex justify-center h-[calc(100vh-14rem)] items-center text-3xl'>
                <p className='text-slate-500'>Red Caida Ponerse en Contacto con Informatica</p>
            </div>
        )
    }

    return (
        <div>
            {data && <div className="w-full">
                <InputDropdownDepartaments table={table} />
                <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                    <div className="max-w-full overflow-x-auto">
                        <Table>
                            <TableHeader>
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <TableRow key={headerGroup.id}>
                                        {headerGroup.headers.map((header) => {
                                            return (
                                                <TableHead key={header.id}>
                                                    {header.isPlaceholder
                                                        ? null
                                                        : flexRender(
                                                            header.column.columnDef.header,
                                                            header.getContext()
                                                        )}
                                                </TableHead>
                                            )
                                        })}
                                    </TableRow>
                                ))}
                            </TableHeader>
                            <TableBody>
                                {table.getRowModel().rows?.length ? (
                                    table.getRowModel().rows.map((row) => (
                                        <TableRow
                                            key={row.id}
                                            data-state={row.getIsSelected() && "selected"}
                                        >
                                            {row.getVisibleCells().map((cell) => (
                                                <TableCell key={cell.id}>
                                                    {flexRender(
                                                        cell.column.columnDef.cell,
                                                        cell.getContext()
                                                    )}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell
                                            colSpan={columns.length}
                                            className="h-24 text-center"
                                        >
                                            No results.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </div>
                <ButtonDepartaments table={table} />
            </div>}
        </div>

    )
}