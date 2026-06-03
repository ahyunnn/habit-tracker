"use client";

import { Button } from "@mui/material";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { RefObject } from "react";

interface DownloadBtnProps {
  type: string;
  captureRef: RefObject<HTMLDivElement | null>;
}

export default function DownloadBtn({ type, captureRef }: DownloadBtnProps) {
  const handleDownload = async () => {
    if (!captureRef.current) {
      return;
    }

    await document.fonts.ready;

    const canvas = await html2canvas(captureRef.current, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
    });

    if (type === "png") {
      const link = document.createElement("a");

      link.download = "mandalart.png";
      link.href = canvas.toDataURL("image/png");

      link.click();
      return;
    }

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: canvas.width > canvas.height ? "landscape" : "portrait",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);

    pdf.save("mandalart.pdf");
  };

  return (
    <Button
      variant="contained"
      onClick={handleDownload}
      sx={{
        height: "40px",
        color: "black",
        backgroundColor: "pink",
      }}
    >
      다운로드
    </Button>
  );
}
