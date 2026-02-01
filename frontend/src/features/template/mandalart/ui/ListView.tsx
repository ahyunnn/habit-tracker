import { Box, InputBase } from "@mui/material";
import { GridView } from "./GridView";

interface ListViewProps {
  bId: string;
  data: any;
  onUpdate: (blockId: string, cellId: string, value: string) => void;
}

export const ListView = ({ bId, data, onUpdate }: ListViewProps) => {
  if (bId === "center") {
    return <GridView bId={bId} data={data} onUpdate={onUpdate} />;
  }

  const cellIds = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const cells = data[bId].cells;

  return (
    <Box
      sx={{
        height: "100%",
        p: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          mb: 1,
          p: 0.5,
          bgcolor: "#f0f0f0",
          fontWeight: 700,
          fontSize: "0.8rem",
        }}
      >
        <InputBase
          fullWidth
          placeholder="주제를 입력해주세요"
          value={cells.title || ""}
          onChange={(e) => onUpdate(bId, "title", e.target.value)}
          sx={{
            textAlign: "center",
            "& input": {
              textAlign: "center",
            },
          }}
        />
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        {cellIds.map((cId, idx) => {
          const hasValue = Boolean(cells[cId]?.trim());

          return (
            <Box
              key={cId}
              sx={{
                display: "flex",
                alignItems: "center",
                height: 25,
                borderBottom: "1px solid #eee",
                py: 0.5,
              }}
            >
              <Box
                sx={{
                  width: 20,
                  fontSize: "0.7rem",
                  color: "#aaa",
                  textAlign: "center",
                  visibility: hasValue ? "visible" : "hidden",
                }}
              >
                {idx + 1}
              </Box>

              <InputBase
                fullWidth
                value={cells[cId] || ""}
                onChange={(e) => onUpdate(bId, cId, e.target.value)}
                sx={{ fontSize: "0.75rem" }}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
