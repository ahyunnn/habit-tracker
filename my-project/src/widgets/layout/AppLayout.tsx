"use client";

import { useState } from "react";
import { Box } from "@mui/material";
import Header from "@/widgets/header/Header";
import SideBar from "@/widgets/sidebar/SideBar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Header onToggle={() => setIsSidebarOpen((prev) => !prev)} />

      <Box sx={{ display: "flex" }}>
        <SideBar isOpen={isSidebarOpen} />

        <Box component="main" sx={{ flexGrow: 1, pt: "80px", pl: "20px" }}>
          {children}
        </Box>
      </Box>
    </>
  );
}
