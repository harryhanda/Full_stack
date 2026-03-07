import * as React from "react";
import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  List,
  ListItem,
  ListItemText,
  Avatar,
  Typography,
  Container,
  Divider,
  Button,
  Box,
} from "@mui/material";

import { removePlace, clearWishlist } from "../redux/slices/wishlistSlice";

export default function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const totalSaved = useMemo(() => {
    return wishlist.length;
  }, [wishlist]);

  return (
    <Container sx={{ mt: 12, minHeight: "80vh" }}>
      <Typography variant="h4" align="center" sx={{ mb: 2 }}>
        My Travel Wishlist ✈️
      </Typography>

      <Typography align="center" sx={{ mb: 3, color: "gray" }}>
        Total Saved: {totalSaved}
      </Typography>

      {wishlist.length === 0 ? (
        <Typography align="center" sx={{ mt: 6 }}>
          No destinations saved yet 🌍
        </Typography>
      ) : (
        <>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {wishlist.map((place) => (
              <React.Fragment key={place.name}>
                <ListItem
                  secondaryAction={
                    <Button
                      color="error"
                      onClick={() => dispatch(removePlace(place.name))}
                    >
                      Remove
                    </Button>
                  }
                >
                  <Avatar
                    src={place.img}
                    sx={{ width: 80, height: 80, mr: 2, borderRadius: 2 }}
                  />

                  <ListItemText
                    primary={<Typography variant="h6">{place.name}</Typography>}
                    secondary={place.info}
                  />
                </ListItem>

                <Divider />
              </React.Fragment>
            ))}
          </List>

          <Box sx={{ textAlign: "center", mt: 3 }}>
            <Button
              color="error"
              variant="contained"
              onClick={() => dispatch(clearWishlist())}
            >
              Clear Wishlist
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
}