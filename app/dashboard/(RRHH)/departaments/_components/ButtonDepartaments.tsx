import { Button } from '@/components/ui/button'
import React from 'react'

const ButtonDepartaments = ({ table }: { table: any }) => {
    return (
        <div className="flex items-center justify-end space-x-2 py-4">
            <div className="flex-1 text-sm text-muted-foreground">
                {table.getFilteredSelectedRowModel().rows.length} of{" "}
                {table.getFilteredRowModel().rows.length} filas(s) seleccionada(s).
            </div>
            <div className="space-x-2">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                    className="border-stroke bg-white dark:border-strokedark dark:bg-meta-4 dark:text-white"
                >
                    Atras
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    className="dark:text-white border-stroke bg-white dark:border-strokedark dark:bg-meta-4"
                >
                    Siguiente
                </Button>
            </div>
        </div>
    )
}

export default ButtonDepartaments