"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import DashBoard from "@/components/admin/dashboard";
import { isAdmin } from "@/api/api_communications";

const AdminApp = () => {
  const router = useRouter();

  useEffect(() => {
    if (
      localStorage.getItem("auth") &&
      JSON.parse(localStorage.getItem("auth")!).user?._id
    ) {
      isAdmin();
    } else {
      router.push("/signin/");
    }
  }, [router]);
  return <DashBoard />;
};

export default AdminApp;
