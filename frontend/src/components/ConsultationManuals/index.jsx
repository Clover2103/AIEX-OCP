import React from "react";
import ReactPlayer from "react-player";
import "./ConsultationManuals.css";

const ConsultationManuals = () => {
  return (
    <div className="manuals-content container mb-5">
      <div className="video-container">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=2aIZ-ifeEbw"
          controls
          width="100%"
        />
      </div>
    </div>
  );
};

export { ConsultationManuals };

