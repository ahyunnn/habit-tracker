"use client";

import { useState } from "react";
import Header from "@/widgets/header/Header";
import SideBar from "@/widgets/sidebar/SideBar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      <Header onToggle={() => setIsSidebarOpen((prev) => !prev)} />
      <div className="flex">
        <SideBar isOpen={isSidebarOpen} />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </>
  );
}
