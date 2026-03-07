import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPlace } from "../redux/slices/wishlistSlice";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import {
  Typography,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

const images = [
  "/paris.jpg",
  "/bali.jpg",
  "/london.jpg",
  "/japan.jpg",
  "/maldives.jpg",
  "/newyork.jpg",
  "/amritsar.jpg",
  "/germany.jpg",
  "/turkey.jpg",
];

const destinations = [
  "Paris",
  "Bali",
  "London",
  "Japan",
  "Maldives",
  "New York",
  "India",
  "Germany",
  "Turkey",
];

const heights = [200, 100, 150, 130, 170, 200, 180, 140, 120, 150, 160, 200, 100, 120, 140];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(0),
  textAlign: "center",
  overflow: "hidden",
  borderRadius: "12px",
  cursor: "pointer",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  position: "relative",
  "&:hover": {
    transform: "scale(1.05) translateY(-8px)",
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.25)",
  },
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.4s ease",
  },
  "&:hover img": {
    transform: "scale(1.1)",
  },
}));

export default function Explore() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [snackOpen, setSnackOpen] = useState(false);

  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);

  const navigate = useNavigate();

  const handleCardClick = (index) => {
    setSelectedIndex(index);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedIndex(null);
  };

  const handleAddToWishlist = () => {
    const index = selectedIndex;
    const name = destinations[index % destinations.length];
    const img = images[index % images.length];

    const exists = wishlist.some((item) => item.name === name);

    if (!exists) {
      dispatch(addPlace({ name, img, info: "" }));
      setSnackOpen(true);
    } else {
      setSnackOpen(true);
    }

    handleCloseDialog();
  };

  const handleExploreMore = () => {
    const index = selectedIndex;
    const name = destinations[index % destinations.length];
    navigate(`/explore?place=${encodeURIComponent(name)}`);
    handleCloseDialog();
  };

  const handleCloseSnack = () => setSnackOpen(false);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h3"
        align="center"
        sx={{
          mb: 6,
          fontWeight: "bold",
          background: "linear-gradient(45deg, #667eea 30%, #764ba2 90%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Explore Destinations 🌍
      </Typography>

      <Box sx={{ width: "100%" }}>
        <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={3}>
          {heights.map((height, index) => (
            <Box
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Item sx={{ height }} onClick={() => handleCardClick(index)}>
                <img
                  src={images[index % images.length]}
                  alt={`Destination ${index + 1}`}
                  loading="lazy"
                />

                {hoveredIndex === index && (
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      backgroundColor: "rgba(0,0,0,0.7)",
                      color: "#fff",
                      padding: 1.5,
                    }}
                  >
                    <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                      {destinations[index % destinations.length]}
                    </Typography>
                  </Box>
                )}
              </Item>
            </Box>
          ))}
        </Masonry>
      </Box>

      <Snackbar open={snackOpen} autoHideDuration={2000} onClose={handleCloseSnack}>
        <Alert severity="success">Destination added to wishlist!</Alert>
      </Snackbar>

      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          {selectedIndex !== null &&
            destinations[selectedIndex % destinations.length]}
        </DialogTitle>

        <DialogContent>
          <Typography>
            Would you like to add this destination to your wishlist?
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>

          <Button
            variant="outlined"
            onClick={handleExploreMore}
          >
            Explore More
          </Button>

          <Button
            variant="contained"
            onClick={handleAddToWishlist}
          >
            Add to Wishlist
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}