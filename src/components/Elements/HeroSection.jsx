import React from "react";
import Grid from "@mui/material/Grid2";
import { Box, Container, Stack, Typography, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const HeroSection = ({
  backgroundImage,
  title,
  subtitle,
  cardImage,registerButton,
  description,
}) => {

  return (
    <Box>
      <Box
        id="hero"
        sx={{
          width: "100%",
          height: "90vh", // Adjust the height as needed
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the overlay color and opacity as needed
            zIndex: 1,
          }}
        />
        <Container
          sx={{
            position: "relative",
            zIndex: 2,
            color: "white",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: { xs: 14, sm: 20 },
            pb: { xs: 8, sm: 12 },
          }}
        >
          <Stack
            spacing={2}
            useFlexGap
            sx={{ width: { xs: "100%", sm: "80%", md: "100%" } }}
          >
            <Typography
              variant="h1"
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignSelf: "center",
                textAlign: "center",
                fontSize: "clamp(3.5rem, 10vw, 4rem)",
                pt: { xs: 10, sm: 10, md: 8 },
              }}
            >
              {title}&nbsp;
              <Typography
                component="span"
                variant="h1"
                sx={{
                  fontSize: "clamp(3rem, 10vw, 4rem)",
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? "primary.main"
                      : "primary.light",
                }}
              >
                {subtitle}
              </Typography>
            </Typography>
          </Stack>
          {cardImage && ( // Conditionally render the card only if cardImage is provided
            <Box sx={{ flexGrow: 1 }}>
              <Grid container columnSpacing={1} rowSpacing={1}>
                <Grid size={{ xs: 12, sm: 6, md: 5 }}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={cardImage}
                      sx={{ objectFit: "cover" }}
                    />
                  </Card>
                </Grid>

                <Grid size={{ xs: 6, md: 4 }} position={"relative"}>
                  <Typography sx={{ marginTop: 15 }}>{description}</Typography>
                </Grid>
              </Grid>
            </Box>
          )}
          {registerButton && (
            <Box
              sx={{ position: "relative", justifyContent: "center", mt:{xs:2,sm:5, md:15 } }}
            >
              <Button sx={{ padding: "10px 15px 10px 15px" }} variant="contained">
                {registerButton}
              </Button>
            </Box>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default HeroSection;
