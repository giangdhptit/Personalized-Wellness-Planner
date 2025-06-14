"use client";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export default function CircularLoader({ sx, wrapperSx }) {
  return (
    <Box sx={wrapperSx}>
      <CircularProgress
        sx={{ width: 50, height: 50, ...sx, color: "var(--primary-color)" }}
      />
    </Box>
  );
}
