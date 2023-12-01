import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Supervisores Table| Next.js E-commerce Dashboard Template',
    description: 'This is Tables page for TailAdmin Next.js'
}

const LayoutSupervisors = ({ children }: { children: React.ReactNode }) => {
    return (
        <>{children}</>
    )
}

export default LayoutSupervisors