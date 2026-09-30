import React from "react";
import "./ChipVideo.css";

const ChipVideo = () => {
  return (
    <section className="chip-video-section">
      <video
        className="chip-video"
        src= {require("../assets/chip-video.mp4")}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
    </section>
  );
};

export default ChipVideo;
