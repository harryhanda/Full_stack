import IntroHero from "../components/IntroHome";
import HeroSection from "../components/HeroSection";
import DestinationCard from "../components/DestinationCard";
import { Container, Grid, Typography } from "@mui/material";

export default function Home() {
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
                img="/parisimage.jpg"
              />
            </Grid>

            <Grid item>
              <DestinationCard
                place="Maldives"
                img="/Overwater Bungalows in the Maldives.jpg"
              />
            </Grid>

            <Grid item>
              <DestinationCard
                place="Japan"
                img="/Incredible Places to Visit in Japan – A Must-See Travel Guide.jpg"
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
