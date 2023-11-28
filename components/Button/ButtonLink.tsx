import Link from 'next/link'
import React from 'react'

interface ButtonLinkProps {
    href: string
    label: string
}
const ButtonLink = ({ href = '/', label = '' }: ButtonLinkProps) => {
    return (
        <div className='flex justify-end'>
            <Link
                href={href}
                className="inline-flex items-center justify-center gap-2.5 rounded-md bg-primary dark:bg-meta-4 py-2 px-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-4 lg:my-4 xl:px-5"
            >
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>

                </span>
                {label}
            </Link>
        </div>
    )
}

export default ButtonLink