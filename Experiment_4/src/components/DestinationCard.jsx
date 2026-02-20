import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";

export default function DestinationCard({ place, img, onExplore }) {
  return (
    <Card
      sx={{
        width: 350,
        borderRadius: 4,
        boxShadow: 5,
        transition: "0.3s",
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
      onClick={() => onExplore && onExplore()}
    >
      <CardMedia
        component="img"
        height="250"
        image={img}
        sx={{
          cursor: "pointer",
          transition: "0.3s",
          "&:hover": {
            opacity: 0.8,
          },
        }}
      />

      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h5" sx={{ mb: 1 }}>
          {place}
        </Typography>

        <Button 
          variant="contained" 
          onClick={(e) => {
            e.stopPropagation();
            onExplore && onExplore();
          }}
        >
          Explore
        </Button>
      </CardContent>
    </Card>
  );
}
