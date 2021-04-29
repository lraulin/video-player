import "./App.css";
import React, { useState } from "react";
import { Video } from "./Video.js";
import { Playlist } from "./Playlist.js";
import * as data from "./data.js";
import { Description } from "./Description";
import { Attachments } from "./Attachments";

const App = () => {
  const [videos] = useState(data.videos);
  const [videoIndex, setVideoIndex] = useState(0);
  const [loop] = useState(false);

  const currentVideo = () => videos[videoIndex];

  const playPrev = () => {
    let prevIndex = videoIndex - 1;
    if (prevIndex < 0) {
      prevIndex = loop ? videos.length - 1 : 0;
    }
    setVideoIndex(prevIndex);
  };

  const playNext = () => {
    let nextIndex = videoIndex + 1;
    if (nextIndex >= videos.length) {
      nextIndex = loop ? 0 : videos.length - 1;
    }
    setVideoIndex(nextIndex === videos.length ? 0 : nextIndex);
  };

  const setSelectedVideo = (id) =>
    setVideoIndex(videos.findIndex((video) => video.youTubeId === id));

  return (
    <>
      <h1>Now Playing: {currentVideo().title}</h1>
      <button onClick={playPrev}>Prev</button>
      <button onClick={playNext}>Next</button>
      <Video video={currentVideo()} />
      <Playlist videos={videos} setSelectedVideo={setSelectedVideo} />
      <Attachments attachments={currentVideo().attachments} />
      <Description description={currentVideo().description} />
    </>
  );
};

export default App;
