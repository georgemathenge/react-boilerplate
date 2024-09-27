import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";

const YouTubePlayer = ({ videoId }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [player, setPlayer] = useState(null);

  // YouTube player options
  const opts = {
    height: 500,
    width: 800,
    playerVars: {
      autoplay: 1, // Auto-play the video on load
      controls: 1, // Show player controls
    },
  };

  // // Function to handle player state changes
  // const onPlayerStateChange = (event) => {
  //   if (event.data === window.YT.PlayerState.ENDED) {
  //     console.log("Video finished");
  //   } else if (event.data === window.YT.PlayerState.PLAYING) {
  //     const interval = setInterval(() => {
  //       if (player) {
  //         const time = player.getCurrentTime(); // Get current playback time in seconds
  //         setCurrentTime(time);
  //         console.log(`Current time: ${time}`);
  //       }
  //     }, 1000); // Check every second

  //     // Clear interval when video is paused or stopped
  //     return () => clearInterval(interval);
  //   }
  // };

  // // Function called when the player is ready
  // const onReady = (event) => {
  //   setPlayer(event.target); // Save the player instance to access it later
  // };

  // Load the saved time when the component mounts
  useEffect(() => {
    const savedTime = localStorage.getItem(`lastWatched_${videoId}`);
    if (savedTime) {
      setCurrentTime(parseFloat(savedTime));
    }
  }, [videoId]);

  // Save the last watched time to localStorage
  const saveLastWatchedTime = (time) => {
    localStorage.setItem(`lastWatched_${videoId}`, time);
    console.log(`Saved time: ${time}`);
  };

    // const saveLastWatchedTime = (time) => {
    //   axios
    //     .post(`/api/videos/${videoId}/last-watched`, {
    //       userId,
    //       lastWatchedTime: time,
    //     })
    //     .then(() => console.log("Last watched time saved:", time))
    //     .catch((error) =>
    //       console.error("Error saving last watched time:", error)
    //     );
    // };

  // Function to handle player state changes
  const onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.ENDED) {
      console.log("Video finished");
      saveLastWatchedTime(0); // Reset to 0 when the video ends
    } else if (event.data === window.YT.PlayerState.PAUSED) {
      const time = player.getCurrentTime();
      saveLastWatchedTime(time); // Save time when the video is paused
    } else if (event.data === window.YT.PlayerState.PLAYING) {
      const interval = setInterval(() => {
        if (player) {
          const time = player.getCurrentTime(); // Get current playback time in seconds
          setCurrentTime(time);
          console.log(`Current time: ${time}`);
        }
      }, 1000); // Check every second

      // Clear interval when video is paused or stopped
      return () => clearInterval(interval);
    }
  };

  // Function called when the player is ready
  const onReady = (event) => {
    setPlayer(event.target); // Save the player instance to access it later
    const savedTime = localStorage.getItem(`lastWatched_${videoId}`);
    if (savedTime) {
      event.target.seekTo(parseFloat(savedTime)); // Start from the saved time
    }
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={onReady}
        onStateChange={onPlayerStateChange}
      />
      <p>Current time watched: {Math.floor(currentTime)} seconds</p>
    </div>
  );
};

export default YouTubePlayer;
