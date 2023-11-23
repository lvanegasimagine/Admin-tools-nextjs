'use client'
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { DataTable } from "@/components/Tables/Datatable";
import TableOne from "@/components/Tables/TableOne";
import TableThree from "@/components/Tables/TableThree";
import TableTwo from "@/components/Tables/TableTwo";
import { useOrganizationList } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const TablesPage = () => {

  //**
  // Loading
  //**
  // Organization data
  const { organizationList, isLoaded, setActive } = useOrganizationList();
  // Next.js router
  const router = useRouter();

  // State to control the loading delay
  const [showLoader, setShowLoader] = useState(true);

  // Simulate a 5-second delay before hiding the loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5000);

    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, []);

  // Wait for organization data to load and check if the user's role is not admin
  useEffect(() => {
    if (isLoaded) {
      // Find the admin organization from the loaded organization list
      const adminOrganization = organizationList.find(
        (org) => org.membership.role === 'admin'
      );

      // If the user is not an admin, redirect to the homepage
      if (!adminOrganization || adminOrganization.membership.role !== 'admin') {
        router.push('/'); // Replace '/' with the homepage URL
      } else {
        // If the user is an admin, no need to wait for organization list, directly render the admin page
        setShowLoader(false);
      }
    }
  }, [isLoaded, organizationList]);

  // Get the organization details of the admin
  const adminOrganization = isLoaded
    ? organizationList.find((org) => org.membership.role === 'admin')
    : null;

  // Set the admin details
  const adminName = adminOrganization
    ? adminOrganization.organization.name
    : 'N/A';
  const adminRole = adminOrganization
    ? adminOrganization.membership.role
    : 'N/A';
  const adminImageUrl = adminOrganization
    ? adminOrganization.organization.imageUrl
    : '/admin.jpeg'; // Replace with the default admin image URL or any other fallback image

  // Render the loader while waiting for organization data to load
  if (showLoader) {
    return <Loading />;
  }
  return (
    <>
      <Breadcrumb pageName="Tables" />
      <div className="flex flex-col gap-10">
        <DataTable />
        <TableOne />
        <TableTwo />
        <TableThree />
      </div>
    </>
  );
};

export default TablesPage;
