import React from "react";
import {Card, Typography} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/material/styles";
// import { Info, InfoEyebrow, InfoTitle, InfoSubtitle } from "./InfoBasic";

const useStyles = () => ({
  eyebrow: {
    color: "rgba(255, 255, 255, 0.92)",
    fontFamily: '"Spartan", san-serif',
    lineHeight: 1.4,
    fontSize: "1.0625rem",
    letterSpacing: "1px",
    textTransform: "initial",
    marginBottom: 0,
  },
  title: {
    color: "#fff",
    fontSize: "1.25rem",
    fontWeight: "bold",
    lineHeight: 1.2,
  },
  subtitle: {
    color: "rgba(255, 255, 255, 0.72)",
    lineHeight: 1.5,
    "&:last-child": {
      marginTop: "1rem",
    },
  },
});

const StyledCard = styled(Card)({
  borderRadius: "1rem",
  boxShadow: "none",
  position: "relative",
  minWidth: 200,
  minHeight: 360,
  "&:after": {
    content: '""',
    display: "block",
    position: "absolute",
    width: "100%",
    height: "64%",
    bottom: 0,
    zIndex: 1,
    background: "linear-gradient(to top, #000, rgba(0,0,0,0))",
  },
});

const StyledCardMedia = styled(CardMedia)({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 0,
  backgroundPosition: "top",
});

const Content = styled("div")(({ theme }) => ({
  padding: theme.spacing(3, 2),
  position: "absolute",
  zIndex: 2,
  bottom: 0,
  width: "100%",
}));

const CardGalaxy = ({ image, eyebrow, title, subtitle }) => {
  const classes = useStyles();

  return (
    <StyledCard>
      <StyledCardMedia image={image} />
      <Content>
        <Typography variant="subtitle1" style={classes.eyebrow}>
          {eyebrow}
        </Typography>
        <Typography variant="h6" style={classes.title}>
          {title}
        </Typography>
        <Typography variant="body2" style={classes.subtitle}>
          {subtitle}
        </Typography>
      </Content>
    </StyledCard>
  );
};

export default CardGalaxy;
