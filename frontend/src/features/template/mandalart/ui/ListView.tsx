import { Box, InputBase } from "@mui/material";
import { GridView } from "./GridView";

export const ListView = ({ bId, data, onUpdate }: any) => {
  const cellIds = ["1", "2", "3", "4", "5", "6", "7", "8"];

  if (bId === "center") {
    return <GridView bId={bId} data={data} onUpdate={onUpdate} />;
  }

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        p: 0.5,
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          height: 36,
          bgcolor: "#f0f0f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "0.8rem",
          fontWeight: 700,
          mb: 0.5,
        }}
      >
        {data.center.cells[bId] || `주제 ${bId}`}
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {cellIds.map((cId) => (
          <Box
            key={cId}
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid #eee",
              px: 1,
              minHeight: 0,
            }}
          >
            <Box sx={{ width: 16, fontSize: "0.65rem", color: "#aaa" }}>
              {cId}
            </Box>
            <InputBase
              fullWidth
              value={data[bId].cells[cId] || ""}
              onChange={(e) => onUpdate(bId, cId, e.target.value)}
              sx={{ fontSize: "0.7rem" }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
