import * as React from "react";
import { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Avatar,
  Typography,
  Container,
  Divider,
  Button,
} from "@mui/material";

const PLACES = [
  {
    name: "Paris",
    img: "/paris.jpg",
    info: "City of lights and romance",
  },
  {
    name: "Bali",
    img: "/bali.jpg",
    info: "Island paradise and beaches",
  },
  {
    name: "Japan",
    img: "/japan.jpg",
    info: "Culture + technology mix",
  },
];

export default function Wishlist() {
  const [saved, setSaved] = useState(PLACES);

  const remove = (name) => {
    setSaved(saved.filter((p) => p.name !== name));
  };

  return (
    <Container sx={{ mt: 12, minHeight: "80vh" }}>
      <Typography variant="h4" align="center" sx={{ mb: 4 }}>
        My Travel Wishlist ✈️
      </Typography>

      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {saved.map((place) => (
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
    </Container>
  );
}
