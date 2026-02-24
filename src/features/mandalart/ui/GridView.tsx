import { Box } from "@mui/material";
import { ItemCard } from "./ItemCard";

export const GridView = ({ bId, data, onUpdate }: any) => {
  const cellLayout = ["1", "2", "3", "4", "title", "5", "6", "7", "8"];

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)",
        gap: 0.5,
        p: 0.5,
        boxSizing: "border-box",
      }}
    >
      {cellLayout.map((cId) => (
        <ItemCard
          key={cId}
          cellId={cId}
          isCenterBlock={bId === "center"}
          value={data[bId].cells[cId] || ""}
          onChange={(val) => onUpdate(bId, cId, val)}
        />
      ))}
    </Box>
  );
};
