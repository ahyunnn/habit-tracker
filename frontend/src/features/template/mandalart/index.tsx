import { useState } from "react";
import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import ListIcon from "@mui/icons-material/List";
import { GridView } from "./ui/GridView";
import { ListView } from "./ui/ListView";
import DownloadBtn from "./ui/DownloadBtn";
import About from "./ui/About";

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
  const [downloadType, setDownloadType] = useState<string>("png");
  const blockLayout = ["1", "2", "3", "4", "center", "5", "6", "7", "8"];

  const handleUpdate = (blockId: string, cellId: string, value: string) => {
    setData((prev: any) => {
      const next = {
        ...prev,
        [blockId]: {
          ...prev[blockId],
          cells: {
            ...prev[blockId].cells,
            [cellId]: value,
          },
        },
      };

      if (blockId === "center" && cellId !== "title") {
        next[cellId] = {
          ...next[cellId],
          cells: {
            ...next[cellId].cells,
            title: value,
          },
        };
      }

      if (blockId !== "center" && cellId === "title") {
        next.center = {
          ...next.center,
          cells: {
            ...next.center.cells,
            [blockId]: value,
          },
        };
      }

      return next;
    });
  };

  const handleChange = (event: SelectChangeEvent) => {
    setDownloadType(event.target.value as string);
  };

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box
        sx={{
          flex: 3,
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          mb: 2,
        }}
      >
        <Box
          sx={{
            mb: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "1000px",
          }}
        >
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
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Box>
              <Select
                value={downloadType}
                onChange={handleChange}
                size="small"
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "pink",
                    borderWidth: 2,
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "pink",
                  },
                }}
              >
                <MenuItem value="png">PNG</MenuItem>
                <MenuItem value="pdf">PDF</MenuItem>
              </Select>
            </Box>
            <DownloadBtn type={downloadType} data={data} viewMode={view} />
          </Box>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "repeat(3, 1fr)",
              gap: 2,
              width: "1000px",
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
      <Box
        sx={{
          flex: 2,
          height: "90vh",
          pl: 2,
        }}
      >
        <About />
      </Box>
    </Box>
  );
}
