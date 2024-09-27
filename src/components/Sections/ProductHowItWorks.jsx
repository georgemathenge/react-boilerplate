import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { Container, Button, Typography } from "@mui/material";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: "default",
  color: "secondary.main",
  fontWeight: "medium",
};

const image = {
  height: 55,
  my: 4,
};

function ProductHowItWorks() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", bgcolor: "secondary.light", overflow: "hidden" }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src="/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: "none",
            position: "absolute",
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography
          variant="h5"
          marked="center"
          component="h2"
          sx={{
            mb: 14,
            position: "relative",
            "::after": {
              content: '""',
              position: "absolute",
              width: "50%", // Width of the underline (adjust as needed)
              height: "2px", // Height/thickness of the underline
              backgroundColor: "black", // Color of the underline
              bottom: "-4px", // Adjust to position the underline below the text
              left: "25%", // Center the underline by adjusting left position
            },
          }}
        >
          HOW IT WORKS
        </Typography>

        <div>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box sx={item}>
                <Box sx={number}>1.</Box>
                <Box
                  component="img"
                  src="/app-registration.svg"
                  alt="suitcase"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Register and Login
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
                <Box
                  component="img"
                  src="/youtube-search.svg"
                  alt="graph"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Search for a YouTube Channel
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                <Box
                  component="img"
                  src="/mark-all.svg"
                  alt="clock"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Track and Mark Videos as Watched{" "}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          component="a"
          href="/premium-themes/onepirate/sign-up/"
          sx={{ mt: 8 }}
        >
          Get started
        </Button>
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;
