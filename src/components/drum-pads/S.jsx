import React from "react";

const S = () => {
  return (
    <button id="clap" className="drum-pad">
      <audio id="S" className="clip">
        <source
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
          type="audio/mpeg"
        />
        <source src="../../assets/audio/Heater-6.mp3" type="audio/mpeg" />
      </audio>
      S
    </button>
  );
};

export default S;
