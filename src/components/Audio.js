import React from "react";

const Audio = ({ mean }) => {
  return (
    <div className="audio-div">
      {
        <audio
          src={mean[0].phonetics[1].audio}
          className="audio"
          controls
          id="audio"
        ></audio>
      }
    </div>
  );
};

export default Audio;
