import React from "react";

export const PlaylistItem = ({ video, setSelectedVideo }) => {
  return (
    <>
      <button onClick={() => setSelectedVideo(video.id)}>{video.title}</button>
    </>
  );
};
