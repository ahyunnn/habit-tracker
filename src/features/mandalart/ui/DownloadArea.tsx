import { forwardRef } from "react";
import { Box } from "@mui/material";
import { DownloadGridView } from "./DownloadGridView";
import { DownloadListView } from "./DownloadListView";

interface Props {
  data: any;
  view: "grid" | "list";
}

const blockStyle = {
  border: "2px solid #333",
  borderRadius: "4px",
  bgcolor: "#fff",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  height: "100%",
};

const blockLayout = ["1", "2", "3", "4", "center", "5", "6", "7", "8"];

export const DownloadArea = forwardRef<HTMLDivElement, Props>(
  ({ data, view }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          position: "fixed",
          left: "-99999px",
          top: 0,

          width: "1000px",
          background: "#fff",
          padding: "30px",
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 2,
          }}
        >
          {blockLayout.map((bId) => (
            <Box
              key={bId}
              sx={{
                ...blockStyle,
                aspectRatio: "1/1",
              }}
            >
              {view === "grid" ? (
                <DownloadGridView bId={bId} data={data} />
              ) : (
                <DownloadListView bId={bId} data={data} />
              )}
            </Box>
          ))}
        </Box>
      </div>
    );
  },
);

DownloadArea.displayName = "DownloadArea";
