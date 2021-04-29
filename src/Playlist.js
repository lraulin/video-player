import React from "react";
import { PlaylistItem } from "./PlaylistItem.js";

export const Playlist = ({ videoIds, videos, setSelectedVideo }) => {
  return (
    <>
      <h2>Playlist</h2>
      <ul>
        {videoIds.map((id) => (
          <li>
            <PlaylistItem
              key={id}
              video={videos[id]}
              setSelectedVideo={setSelectedVideo}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
