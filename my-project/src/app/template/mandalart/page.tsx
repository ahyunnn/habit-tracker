"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const MandalartPage = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Mandalart
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 2,
          maxWidth: 400,
        }}
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <Paper
            key={i}
            elevation={1}
            sx={{
              aspectRatio: "1 / 1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 2,
            }}
          >
            Cell {i + 1}
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default MandalartPage;
