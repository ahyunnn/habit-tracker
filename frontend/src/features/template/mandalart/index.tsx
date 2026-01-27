import { useState } from "react";
import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import ListIcon from "@mui/icons-material/List";
import { GridView } from "./ui/GridView";
import { ListView } from "./ui/ListView";

const createInitialData = () => {
  const blocks: any = { center: { cells: {} } };
  ["1", "2", "3", "4", "5", "6", "7", "8"].forEach((id) => {
    blocks[id] = { cells: {} };
  });
  return blocks;
};

const blockStyle = {
  border: "2px solid #333",
  borderRadius: "4px",
  bgcolor: "#fff",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  height: "100%",
};

export default function MandalartPage() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [data, setData] = useState(createInitialData());
  const blockLayout = ["1", "2", "3", "4", "center", "5", "6", "7", "8"];

  const handleUpdate = (blockId: string, cellId: string, value: string) => {
    setData((prev: any) => {
      const newData = { ...prev };
      newData[blockId].cells[cellId] = value;

      if (blockId === "center" && cellId !== "title") {
        newData[cellId].cells["title"] = value;
      } else if (blockId !== "center" && cellId === "title") {
        newData["center"].cells[blockId] = value;
      }

      return { ...newData };
    });
  };

  return (
    <Box
      sx={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        mb: 2,
      }}
    >
      <Box sx={{ mb: 2 }}>
        <ToggleButtonGroup
          value={view}
          exclusive
          onChange={(_, v) => v && setView(v)}
        >
          <ToggleButton value="grid">
            <GridViewIcon /> Grid View
          </ToggleButton>
          <ToggleButton value="list">
            <ListIcon /> List View
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          // display: "grid",
          // gridTemplateColumns: "repeat(3, 1fr)",
          // gridTemplateRows: "repeat(3, 1fr)",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(3, 1fr)",
            gap: 2,
            width: "70%",
            // height: "100%",
          }}
        >
          {blockLayout.map((bId) => (
            <Box key={bId} sx={blockStyle}>
              {view === "grid" ? (
                <GridView bId={bId} data={data} onUpdate={handleUpdate} />
              ) : (
                <ListView bId={bId} data={data} onUpdate={handleUpdate} />
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
