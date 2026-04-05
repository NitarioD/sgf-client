"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/footer";
import NavBar from "@/components/NavBar";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background via-muted/20 to-background">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        toastClassName="!rounded-lg !shadow-lg !border !border-border/60"
      />
      <NavBar />
      <main className="relative mx-auto w-full min-w-0 max-w-[1600px] flex-1 px-3 py-5 sm:px-5 sm:py-7 md:px-6 lg:px-10 lg:py-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
