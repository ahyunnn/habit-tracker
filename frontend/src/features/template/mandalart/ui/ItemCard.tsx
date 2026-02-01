import { Box, InputBase } from "@mui/material";

interface ItemCardProps {
  value: string;
  onChange: (val: string) => void;
  cellId: string;
  isCenterBlock?: boolean;
}

export const ItemCard = ({
  value,
  onChange,
  cellId,
  isCenterBlock,
}: ItemCardProps) => {
  const isTitle = cellId === "title";

  return (
    <Box
      sx={{
        border: "1px solid #ddd",
        aspectRatio: "1/1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: isTitle ? (isCenterBlock ? "#e9ffee" : "#f0f0f0") : "white",
        transition: "0.2s",
        "&:hover": { bgcolor: isTitle ? undefined : "#fafafa" },
      }}
    >
      <InputBase
        multiline
        value={value}
        onChange={(e) => onChange(e.target.value)}
        sx={{
          width: "100%",
          height: "100%",
          "& .MuiInputBase-input": {
            textAlign: "center",
            fontSize: "0.75rem",
            fontWeight: isTitle ? "bold" : "normal",
            color: "#000",
            p: 1,

            whiteSpace: "pre-wrap",
            wordBreak: "keep-all",
            overflowWrap: "break-word",
          },
        }}
      />
    </Box>
  );
};
