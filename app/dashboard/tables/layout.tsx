import React from 'react'
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Tables Page | Next.js E-commerce Dashboard Template",
  description: "This is Tables page for TailAdmin Next.js",
  // other metadata
};

const LayoutTable = ({children}: {children: React.ReactNode}) => {
  return (
    <>{children}</>
  )
}

export default LayoutTable