"use client";

import { Box } from "@mui/material";
import MandalartForm from "@/features/mandalart";
import About from "@/features/mandalart/ui/About";
import Footer from "@/features/mandalart/ui/Footer";

const MandalartPage = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Box sx={{ px: 10, py: 5, display: "flex", flex: 1 }}>
        <MandalartForm />
        <About />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", py: 1 }}>
        <Footer />
      </Box>
    </Box>
  );
};
export default MandalartPage;
