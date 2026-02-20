import { useContext, useMemo } from "react";
import { AppContext } from "../context/AppContext";
import { Container, Typography, Button } from "@mui/material";

export default function Analytics() {
  const { state, dispatch } = useContext(AppContext);

  const totalSaved = useMemo(() => {
    return state.wishlist.length;
  }, [state.wishlist]);

  return (
    <Container sx={{ mt: 12, textAlign: "center" }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Travel Analytics 📊
      </Typography>

      <Typography variant="h6" sx={{ mb: 3 }}>
        Total Saved Places: {totalSaved}
      </Typography>

      <Button
        variant="contained"
        color="error"
        onClick={() => dispatch({ type: "CLEAR_WISHLIST" })}
      >
        Clear Wishlist
      </Button>
    </Container>
  );
}