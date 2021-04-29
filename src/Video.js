import React from "react";
import YouTube from "react-youtube";

export const Video = ({ video, playNext }) => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const onReady = (event) => event.target.playVideo();

  return (
    <>
      <YouTube
        videoId={video.youTubeId}
        onEnd={playNext}
        onReady={onReady}
        opts={opts}
      />
    </>
  );
};
