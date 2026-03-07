import { Typography, Button, Box } from "@mui/material";

export default function IntroHero() {

  const scrollDown = () => {
    document.getElementById("main").scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1526772662000-3f88f10405ff')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: "bold" }}>
        Travel The World 🌍
      </Typography>

      <Typography variant="h6" sx={{ mb: 3 }}>
        One journey can change your life
      </Typography>

      <Button
        variant="contained"
        onClick={scrollDown}
        sx={{
          background: "white",
          color: "black",
        }}
      >
        Start Journey
      </Button>
    </Box>
  );
}
