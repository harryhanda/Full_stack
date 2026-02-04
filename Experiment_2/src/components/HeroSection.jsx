import { Typography, Button, Box } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 10,
        background: "linear-gradient(135deg,#667eea,#764ba2)",
        color: "white",
      }}
    >
      <Typography variant="h2" gutterBottom>
        Explore Your Dream Destinations ✈️
      </Typography>

      <Typography variant="h6">
        Create your bucket list and explore the world.
      </Typography>
    </Box>
  );
}
