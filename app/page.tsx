import TestComp from "@/components/TestComp";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Typography>Next.js 13.4+ with MUI v5</Typography>
      <TestComp />
    </Box>
  );
}
