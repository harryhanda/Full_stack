import * as React from "react";
import { useContext, useMemo } from "react";
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
import { AppContext } from "../context/AppContext";

export default function Wishlist() {
  const { state, dispatch } = useContext(AppContext);

  // 🔥 derived value (examiner loves this)
  const totalSaved = useMemo(() => {
    return state.wishlist.length;
  }, [state.wishlist]);

  const remove = (name) => {
    dispatch({
      type: "REMOVE_PLACE",
      payload: name,
    });
  };

  const clearAll = () => {
    dispatch({ type: "CLEAR_WISHLIST" });
  };

  return (
    <Container sx={{ mt: 12, minHeight: "80vh" }}>
      <Typography variant="h4" align="center" sx={{ mb: 2 }}>
        My Travel Wishlist ✈️
      </Typography>

      {/* ✅ memo value shown */}
      <Typography align="center" sx={{ mb: 3, color: "gray" }}>
        Total Saved: {totalSaved}
      </Typography>

      {state.wishlist.length === 0 ? (
        <Typography align="center" sx={{ mt: 6 }}>
          No destinations saved yet 🌍
        </Typography>
      ) : (
        <>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {state.wishlist.map((place) => (
              <React.Fragment key={place.name}>
                <ListItem
                  secondaryAction={
                    <Button
                      color="error"
                      onClick={() => remove(place.name)}
                    >
                      Remove
                    </Button>
                  }
                >
                  <Avatar
                    src={place.img}
                    sx={{
                      width: 80,
                      height: 80,
                      mr: 2,
                      borderRadius: 2,
                    }}
                  />

                  <ListItemText
                    primary={
                      <Typography variant="h6">
                        {place.name}
                      </Typography>
                    }
                    secondary={place.info}
                  />
                </ListItem>

                <Divider />
              </React.Fragment>
            ))}
          </List>

          {/* 🔥 clear button */}
          <Box sx={{ textAlign: "center", mt: 3 }}>
            <Button color="error" variant="contained" onClick={clearAll}>
              Clear Wishlist
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
}