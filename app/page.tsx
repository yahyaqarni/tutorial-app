import FilterBuilder from "@/components/FilterBuilder";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <FilterBuilder />
    </Box>
  );
}
