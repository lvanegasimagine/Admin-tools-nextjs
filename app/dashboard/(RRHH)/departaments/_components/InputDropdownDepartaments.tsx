import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { ChevronDownIcon } from "@radix-ui/react-icons"

import React from 'react'

const InputDropdownDepartaments = ({ table }: any) => {
    return (
        <div className="flex justify-between items-center py-4">
            <Input
                placeholder="Filtrar emails..."
                value={(table.getColumn("contact_email")?.getFilterValue() as string) ?? ""}
                onChange={(event: any) =>
                    table.getColumn("contact_email")?.setFilterValue(event.target.value)
                }
                className="max-w-sm dark:border-strokedark dark:bg-meta-4"
            />
            <div className="border-stroke bg-white dark:border-strokedark dark:bg-meta-4">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Columnas <ChevronDownIcon className="ml-2 h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter((column: any) => column.getCanHide())
                            .map((column: any) => {
                                return (
                                    <div className="border-stroke dark:border-strokedark bg-white" key={column.id}>
                                        <DropdownMenuCheckboxItem
                                            className="capitalize"
                                            checked={column.getIsVisible()}
                                            onCheckedChange={(value: any) =>
                                                column.toggleVisibility(!!value)
                                            }
                                        >
                                            {column.id}
                                        </DropdownMenuCheckboxItem>
                                    </div>
                                )
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}

export default InputDropdownDepartaments