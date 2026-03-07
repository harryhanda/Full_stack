import { Container, Typography, Button, Box } from "@mui/material";

export default function ErrorPage({ setPage }) {
  return (
    <Container sx={{ mt: 12, minHeight: "70vh", textAlign: "center" }}>
      <Box sx={{ py: 8 }}>
        <Typography variant="h3" sx={{ mb: 2 }}>
          Oops — Something went wrong 😬
        </Typography>

        <Typography variant="body1" sx={{ color: "gray", mb: 4 }}>
          An unexpected error occurred. You can return to the homepage or try again.
        </Typography>

        <Button variant="contained" onClick={() => setPage("home")} sx={{ mr: 2 }}>
          Go Home
        </Button>

        <Button variant="outlined" onClick={() => setPage("explore")}>
          Try Explore
        </Button>
      </Box>
    </Container>
  );
}
