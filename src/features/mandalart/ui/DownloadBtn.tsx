"use client";

import { Button } from "@mui/material";
import jsPDF from "jspdf";

interface CellData {
  cells: Record<string, string>;
}

interface DownloadBtnProps {
  type: string;
  data: Record<string, CellData>;
  viewMode?: "grid" | "list";
}

const C = {
  centerCell: "#b2ebf2",
  titleCell: "#e8e8e8",
  white: "#ffffff",
  border: "#cccccc",
  outerBorder: "#aaaaaa",
  text: "#000000",
  bg: "#e0e0e0",
  listHeader: "#eeeeee",
  subText: "#666666",
};

const GRID_POS: Record<string, [number, number]> = {
  "1": [0, 0],
  "2": [0, 1],
  "3": [0, 2],
  "4": [1, 0],
  center: [1, 1],
  "5": [1, 2],
  "6": [2, 0],
  "7": [2, 1],
  "8": [2, 2],
};

const INNER_ORDER = ["1", "2", "3", "4", "title", "5", "6", "7", "8"];

function getFontFamily(): string {
  if (typeof document !== "undefined") {
    const val = getComputedStyle(document.documentElement)
      .getPropertyValue("--font-nanum-gothic")
      .trim();
    if (val) return `${val}, sans-serif`;
  }
  return "sans-serif";
}

function font(px: number, bold = false, family?: string) {
  return `${bold ? "bold " : ""}${px}px ${family ?? getFontFamily()}`;
}

function fillTextWrapped(
  ctx: CanvasRenderingContext2D,
  text: string,
  cx: number,
  cy: number,
  maxWidth: number,
  lineHeight: number,
) {
  if (!text) return;
  let line = "";
  const lines: string[] = [];
  for (const ch of text) {
    const test = line + ch;
    if (ctx.measureText(test).width > maxWidth && line.length > 0) {
      lines.push(line);
      line = ch;
      if (lines.length === 2) break;
    } else {
      line = test;
    }
  }
  if (line && lines.length < 2) lines.push(line);
  const startY = cy - ((lines.length - 1) * lineHeight) / 2;
  lines.forEach((l, i) => {
    ctx.fillText(l, cx, startY + i * lineHeight, maxWidth);
  });
}

function drawInnerGrid(
  ctx: CanvasRenderingContext2D,
  section: CellData,
  secKey: string,
  x: number,
  y: number,
  w: number,
  h: number,
  scale: number,
  family: string,
) {
  const isCenter = secKey === "center";
  const cellW = w / 3;
  const cellH = h / 3;
  const s = scale;

  INNER_ORDER.forEach((cKey, idx) => {
    const col = idx % 3;
    const row = Math.floor(idx / 3);
    const cx = x + col * cellW;
    const cy = y + row * cellH;
    const isTitle = cKey === "title";

    if (isTitle) {
      ctx.fillStyle = isCenter ? C.centerCell : C.titleCell;
      ctx.fillRect(cx, cy, cellW, cellH);
    }

    ctx.strokeStyle = C.border;
    ctx.lineWidth = 0.5 * s;
    ctx.strokeRect(cx, cy, cellW, cellH);

    const value = isTitle
      ? (section.cells.title ?? secKey)
      : (section.cells[cKey] ?? "");

    ctx.fillStyle = C.text;
    ctx.font = font(isTitle ? 13 * s : 11 * s, isTitle, family);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    fillTextWrapped(
      ctx,
      value,
      cx + cellW / 2,
      cy + cellH / 2,
      cellW - 6 * s,
      13 * s,
    );
  });
}

function drawListCard(
  ctx: CanvasRenderingContext2D,
  section: CellData,
  secKey: string,
  x: number,
  y: number,
  cardW: number,
  cardH: number,
  headerH: number,
  scale: number,
  family: string,
) {
  const s = scale;
  const rowH = (cardH - headerH) / 8;

  ctx.fillStyle = C.white;
  ctx.fillRect(x, y, cardW, cardH);
  ctx.strokeStyle = C.outerBorder;
  ctx.lineWidth = 1 * s;
  ctx.strokeRect(x, y, cardW, cardH);

  ctx.fillStyle = C.listHeader;
  ctx.fillRect(x, y, cardW, headerH);

  ctx.beginPath();
  ctx.strokeStyle = C.border;
  ctx.lineWidth = 1 * s;
  ctx.moveTo(x, y + headerH);
  ctx.lineTo(x + cardW, y + headerH);
  ctx.stroke();

  ctx.fillStyle = C.text;
  ctx.font = font(14 * s, true, family);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(section.cells.title ?? secKey, x + cardW / 2, y + headerH / 2);

  ["1", "2", "3", "4", "5", "6", "7", "8"].forEach((cKey, i) => {
    const cy = y + headerH + i * rowH;
    if (i > 0) {
      ctx.beginPath();
      ctx.strokeStyle = C.border;
      ctx.lineWidth = 0.5 * s;
      ctx.moveTo(x, cy);
      ctx.lineTo(x + cardW, cy);
      ctx.stroke();
    }
    const numW = 22 * s;
    const midY = cy + rowH / 2;

    ctx.fillStyle = C.subText;
    ctx.font = font(11 * s, false, family);
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillText(cKey, x + numW, midY);

    ctx.fillStyle = C.text;
    ctx.font = font(12 * s, false, family);
    ctx.textAlign = "left";
    ctx.fillText(
      section.cells[cKey] ?? "",
      x + numW + 5 * s,
      midY,
      cardW - numW - 10 * s,
    );
  });
}

function drawGridView(
  ctx: CanvasRenderingContext2D,
  data: Record<string, CellData>,
  scale: number,
) {
  const family = getFontFamily();
  const s = scale;
  const SEC = 200;
  const GAP = 8;
  const PAD = 16;
  const SS = SEC * s;
  const G = GAP * s;
  const P = PAD * s;

  ctx.canvas.width = SS * 3 + G * 2 + P * 2;
  ctx.canvas.height = SS * 3 + G * 2 + P * 2;

  ctx.fillStyle = C.bg;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  Object.entries(GRID_POS).forEach(([secKey, [secRow, secCol]]) => {
    const section = data[secKey];
    if (!section) return;
    const x = P + secCol * (SS + G);
    const y = P + secRow * (SS + G);

    ctx.fillStyle = C.white;
    ctx.fillRect(x, y, SS, SS);
    ctx.strokeStyle = C.outerBorder;
    ctx.lineWidth = 1.5 * s;
    ctx.strokeRect(x, y, SS, SS);

    drawInnerGrid(ctx, section, secKey, x, y, SS, SS, s, family);
  });
}

function drawListView(
  ctx: CanvasRenderingContext2D,
  data: Record<string, CellData>,
  scale: number,
) {
  const family = getFontFamily();
  const s = scale;

  const COL = 3;
  const CARD_W = 290;
  const HEADER_H = 38 * s;

  const CARD_H = CARD_W * s;

  const CW = CARD_W * s;
  const GX = 14 * s;
  const GY = 14 * s;
  const P = 16 * s;

  const LIST_ORDER = ["1", "2", "3", "4", "center", "5", "6", "7", "8"];
  const rowCount = 3;

  ctx.canvas.width = COL * CW + 2 * GX + P * 2;
  ctx.canvas.height = rowCount * CARD_H + (rowCount - 1) * GY + P * 2;

  ctx.fillStyle = C.bg;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  LIST_ORDER.forEach((key, idx) => {
    const section = data[key];
    if (!section) return;

    const col = idx % COL;
    const row = Math.floor(idx / COL);
    const x = P + col * (CW + GX);
    const y = P + row * (CARD_H + GY);

    if (key === "center") {
      ctx.fillStyle = C.white;
      ctx.fillRect(x, y, CW, CARD_H);
      ctx.strokeStyle = C.outerBorder;
      ctx.lineWidth = 1 * s;
      ctx.strokeRect(x, y, CW, CARD_H);
      drawInnerGrid(ctx, section, "center", x, y, CW, CARD_H, s, family);
    } else {
      drawListCard(ctx, section, key, x, y, CW, CARD_H, HEADER_H, s, family);
    }
  });
}

const DownloadBtn = ({ type, data, viewMode = "grid" }: DownloadBtnProps) => {
  const handleDownload = async () => {
    await document.fonts.ready;

    const scale = 2;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (viewMode === "grid") {
      drawGridView(ctx, data, scale);
    } else {
      drawListView(ctx, data, scale);
    }

    const fileName = `mandalart_${viewMode}`;

    if (type === "png") {
      canvas.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${fileName}.png`;
        a.click();
        URL.revokeObjectURL(url);
      }, "image/png");
    } else if (type === "pdf") {
      const imgData = canvas.toDataURL("image/png");
      const pxToMm = (px: number) => (px / scale / 96) * 25.4;
      const pdfW = pxToMm(canvas.width);
      const pdfH = pxToMm(canvas.height);
      const orientation = pdfW > pdfH ? "landscape" : "portrait";
      const pdf = new jsPDF({ orientation, unit: "mm", format: [pdfW, pdfH] });
      pdf.addImage(imgData, "PNG", 0, 0, pdfW, pdfH);
      pdf.save(`${fileName}.pdf`);
    }
  };

  return (
    <Button
      variant="contained"
      sx={{ height: "40px", color: "black", backgroundColor: "pink" }}
      onClick={handleDownload}
    >
      다운로드
    </Button>
  );
};

export default DownloadBtn;
