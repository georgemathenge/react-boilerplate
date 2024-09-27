import { useEffect, useState } from "react";
import * as React from "react";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import YouTubePlayer from "../Elements/YoutubePlayer";

import {
  Button,
  FormControl,
  OutlinedInput,
  Modal,
  LinearProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
// import { BASEURL } from "./api-service.js";
const BASEURL = "http://localhost:4007";
const Features = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVideoId, setSelectedVideoId] = useState(""); // State for selected videoId
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = (videoUuid) => {
    setSelectedVideoId(videoUuid);
    setOpen(true);
  };
  const handleClose = () =>{
    setSelectedVideoId(""); 
    setOpen(false);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace this URL with your actual API endpoint
        const response = await axios.get(
          `${BASEURL}/api/v1/youtube/videos/query?page=1`,
          {
            params: {
              playlistId: "UUOMKl1WGrWBOJTy13GVWcUg",
            },
          }
        );
        console.log(response.data);
        setData(response.data); // Adjust based on your API structure
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: 500,
    width: 800,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 0,
  };

  return (
    <Box
      id=""
      sx={(theme) => ({
        width: "100%",
        backgroundImage:
          theme.palette.mode === "light"
            ? "inherit"
            : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
        backgroundSize: "100% 80%",
        backgroundRepeat: "no-repeat",
        position: "relative", // Maintain relative position in its flow
        padding: "20px",
        zIndex: 1,
      })}
    >
      <Container
        sx={{
          marginTop: "-100px", // To overlap the hero section
          position: "relative",
          width: "100%",
        }}
      >
        <Box>
          <Card
            sx={{
              display: "flex",
              direction: "colmnn",
              position: "relative",
              justifyContent: "space-between",
              padding: { xs: 1, sm: 1 },
              minHeight: "20px",
              marginBottom: 4,
              color: "black",
            }}
          >
            <Typography sx={{ pt: { xs: 2, sm: 2 } }}>Search Videos</Typography>
            <form noValidate autoComplete="off">
              <FormControl
                sx={{ width: { xs: "20ch", sm: "20ch", md: "40ch" } }}
              >
                <OutlinedInput placeholder="Please enter text" />
              </FormControl>
            </form>

            <Button variant="contained">Search</Button>
          </Card>
        </Box>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {data && (
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 2 }}
            sx={{
              width: "120%",
              position: "relative",
              left: -5,
            }}
          >
            {data.map((video) => (
              <Grid item xs={12} sm={6} md={4} key={video.id}>
                <Card
                  sx={{
                    maxWidth: 280,
                    height: 400,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt={video.title}
                    height="230"
                    image={video.snippet.thumbnails.high.url}
                    sx={{ objectFit: "cover" }}
                  />
                  <LinearProgress
                    variant="determinate"
                    // value={progressPercentage}
                  />

                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h7" component="div">
                      {video.snippet.title}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "flex-end" }}>
                    <Button size="small">Share</Button>
                    <Button
                      onClick={() =>
                        handleOpen(video.snippet.resourceId.videoId)
                      }
                      variant="contained"
                    >
                      Play
                    </Button>
                  </CardActions>
                  {/* {isModalOpen && <YouTubePlayer videoId={video.snippet.resourceId.videoId} 
                  onProgress={handleProgress} />} */}
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 10, sm: 5 },
          pb: { xs: 5, sm: 5 },
        }}
      >
        <Link to={`/stories`}>
          <Button variant="contained" size="small">
            Read More
          </Button>
        </Link>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {selectedVideoId && <YouTubePlayer videoId={selectedVideoId} />}
        </Box>
      </Modal>
    </Box>
  );
};

export default Features;
