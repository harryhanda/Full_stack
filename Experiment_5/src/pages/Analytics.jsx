import { useSelector, useDispatch } from "react-redux";
import { useMemo } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box
} from "@mui/material";

import { clearWishlist } from "../redux/slices/wishlistSlice";

export default function Analytics() {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const analytics = useMemo(() => {
    const total = wishlist.length;

    const uniquePlaces = new Set(
      wishlist.map((item) => item.name)
    ).size;

    const travelScore = total * 5;

    return { total, uniquePlaces, travelScore };
  }, [wishlist]);

  const StatCard = ({ title, value }) => (
    <Card
      sx={{
        height: "100%",
        borderRadius: 3,
        boxShadow: 3
      }}
    >
      <CardContent>
        <Typography
          variant="subtitle2"
          color="text.secondary"
        >
          {title}
        </Typography>

        <Typography
          variant="h4"
          sx={{ mt: 1, fontWeight: "bold" }}
        >
          {value}
        </Typography>
      </CardContent>
    </Card>
  );

  return (
    <Container sx={{ mt: 12 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ mb: 5, fontWeight: "bold" }}
      >
        Travel Analytics
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <StatCard
            title="Total Destinations Saved"
            value={analytics.total}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <StatCard
            title="Unique Places"
            value={analytics.uniquePlaces}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <StatCard
            title="Travel Score"
            value={analytics.travelScore}
          />
        </Grid>
      </Grid>

      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Button
          variant="contained"
          color="error"
          onClick={() => dispatch(clearWishlist())}
        >
          Clear Wishlist
        </Button>
      </Box>
    </Container>
  );
}