import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";

export default function DestinationCard({ place, img }) {
  return (
    <Card
      sx={{
        width: 350,
        borderRadius: 4,
        boxShadow: 5,
        transition: "0.3s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="250"
        image={img}
      />

      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h5" sx={{ mb: 1 }}>
          {place}
        </Typography>

        <Button variant="contained">
          Explore
        </Button>
      </CardContent>
    </Card>
  );
}
