import ECommerce from '@/components/Dashboard/E-commerce'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "TailAdmin | Next.js E-commerce Dashboard Template",
  description: "This is Home Blog page for TailAdmin Next.js",
  // other metadata
};

const Dashboard = () => {
  return (
    <div>
        <ECommerce/>
    </div>
  )
}

export default Dashboard