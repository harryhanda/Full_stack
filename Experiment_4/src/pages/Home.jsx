import { useNavigate } from "react-router-dom";
import IntroHero from "../components/IntroHome";
import HeroSection from "../components/HeroSection";
import DestinationCard from "../components/DestinationCard";
import { Container, Grid, Typography } from "@mui/material";

export default function Home() {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/explore");
  };

  return (
    <>
      <IntroHero />

      {/* Main Section */}
      <div id="main">
        <HeroSection />

        <Typography
          variant="h4"
          align="center"
          sx={{ mt: 6 }}
        >
          Popular Destinations 🌎
        </Typography>

        <Container sx={{ mt: 5 }}>
          <Grid container spacing={5} justifyContent="center">
            <Grid item>
              <DestinationCard
                place="Paris"
                img="/paris.jpg"
                onExplore={handleExplore}
              />
            </Grid>

            <Grid item>
              <DestinationCard
                place="Maldives"
                img="/maldives.jpg"
                onExplore={handleExplore}
              />
            </Grid>

            <Grid item>
              <DestinationCard
                place="Japan"
                img="/japan.jpg"
                onExplore={handleExplore}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
