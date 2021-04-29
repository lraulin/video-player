import "./App.css";
import React, { useState } from "react";
import { Video } from "./Video.js";
import { Playlist } from "./Playlist.js";
import * as data from "./data.js";

const App = () => {
  const [videoIds, setVideoIds] = useState(data.videoIds);
  const [videos, setVideos] = useState(data.videos);
  const [videoIndex, setVideoIndex] = useState(0);

  const playPrev = () => {
    const prevIndex = videoIndex - 1;
    setVideoIndex(prevIndex == -1 ? videoIds.length - 1 : prevIndex);
  };

  const playNext = () => {
    const nextIndex = videoIndex + 1;
    setVideoIndex(nextIndex == videoIds.length ? 0 : nextIndex);
  };

  const setSelectedVideo = (id) => setVideoIndex(id);

  return (
    <>
      <h1>Now Playing: {videos[videoIds[videoIndex]].title}</h1>
      <button onClick={playPrev}>Prev</button>
      <button onClick={playNext}>Next</button>
      <Video video={videos[videoIds[videoIndex]]} />
      <Playlist
        videoIds={videoIds}
        videos={videos}
        setSelectedVideo={setSelectedVideo}
      />
    </>
  );
};

export default App;
