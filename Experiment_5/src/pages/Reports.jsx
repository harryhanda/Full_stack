import { useSelector } from "react-redux";
import { useMemo, useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Box,
  Button,
  TextField
} from "@mui/material";

export default function Reports() {

  const wishlist = useSelector((state) => state.wishlist);

  const [goal, setGoal] = useState(10);
  const [inputGoal, setInputGoal] = useState("");

  // Load goal from localStorage
  useEffect(() => {
    const savedGoal = localStorage.getItem("travelGoal");
    if (savedGoal) {
      setGoal(Number(savedGoal));
    }
  }, []);

  const report = useMemo(() => {
    const total = wishlist.length;

    const progress = goal
      ? Math.min((total / goal) * 100, 100)
      : 0;

    return { total, progress };

  }, [wishlist, goal]);

  const updateGoal = () => {
    if (inputGoal > 0) {
      const newGoal = Number(inputGoal);
      setGoal(newGoal);
      localStorage.setItem("travelGoal", newGoal);
      setInputGoal("");
    }
  };

  const deleteGoal = () => {
    localStorage.removeItem("travelGoal");
    setGoal(10);
  };

  return (
    <Container sx={{ mt: 12, mb: 6 }}>

      <Typography
        variant="h4"
        align="center"
        sx={{ mb: 6, fontWeight: "bold" }}
      >
        Travel Reports
      </Typography>

      <Grid container spacing={4}>

        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardContent>

              <Typography color="text.secondary">
                Destinations Planned
              </Typography>

              <Typography variant="h3" sx={{ mt: 1, fontWeight: "bold" }}>
                {report.total}
              </Typography>

            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardContent>

              <Typography color="text.secondary">
                Travel Goal
              </Typography>

              <Typography variant="h3" sx={{ mt: 1, fontWeight: "bold" }}>
                {goal}
              </Typography>

            </CardContent>
          </Card>
        </Grid>

      </Grid>

      <Box sx={{ mt: 6 }}>

        <Typography sx={{ mb: 2 }}>
          Progress Toward Travel Goal
        </Typography>

        <LinearProgress
          variant="determinate"
          value={report.progress}
          sx={{ height: 10, borderRadius: 5 }}
        />

        <Typography sx={{ mt: 1 }}>
          {Math.round(report.progress)}% completed
        </Typography>

      </Box>

      {/* Goal Controls */}

      <Box sx={{ mt: 6 }}>

        <Typography variant="h6" sx={{ mb: 2 }}>
          Adjust Travel Goal
        </Typography>

        <TextField
          label="Set New Goal"
          type="number"
          value={inputGoal}
          onChange={(e) => setInputGoal(e.target.value)}
          sx={{ mr: 2 }}
        />

        <Button
          variant="contained"
          onClick={updateGoal}
        >
          Set Goal
        </Button>

        <Button
          variant="outlined"
          color="error"
          sx={{ ml: 2 }}
          onClick={deleteGoal}
        >
          Delete Goal
        </Button>

      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Recent Destinations
        </Typography>

        {wishlist.length === 0 ? (
          <Typography color="text.secondary">
            No destinations added yet.
          </Typography>
        ) : (
          wishlist.slice(-5).map((place, index) => (
            <Typography key={index}>
              • {place.name}
            </Typography>
          ))
        )}
      </Box>

    </Container>
  );
}