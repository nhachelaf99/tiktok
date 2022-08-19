import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Marquee from "react-fast-marquee";

function VideoFooter({ channel, description, song }) {

  const marqueeStyle = {
    position: "relative",
    width: "60%",
    margin: "0 auto"
  }

  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          <Marquee style={marqueeStyle} gradient={false}>
              {song}
          </Marquee>
        </div>
      </div>
      <img
        className="videoFooter__record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
}

export default VideoFooter;
