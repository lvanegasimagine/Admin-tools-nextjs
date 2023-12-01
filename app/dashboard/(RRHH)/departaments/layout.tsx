import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Departaments Table | Corasco Admin Tools",
  description: "This is Tables page for TailAdmin Next.js",
};

const LayoutDepartaments = ({children}: {children: React.ReactNode}) => {
  return (
    <>{children}</>
  )
}

export default LayoutDepartaments