import React from "react";
import { PlaylistItem } from "./PlaylistItem.js";

export const Playlist = ({ videos, setSelectedVideo }) => {
  return (
    <>
      <h2>Playlist</h2>
      <ul>
        {videos.map((video) => (
          <li>
            <PlaylistItem
              key={video.youTubeId}
              video={video}
              setSelectedVideo={setSelectedVideo}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
