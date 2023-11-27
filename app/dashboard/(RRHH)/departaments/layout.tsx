import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Departaments Tablets | Corasco Admin Tools",
  description: "This is Tables page for TailAdmin Next.js",
  // other metadata
};

const LayoutDepartaments = ({children}: {children: React.ReactNode}) => {
  return (
    <>{children}</>
  )
}

export default LayoutDepartaments