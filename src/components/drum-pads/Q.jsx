import React from "react";

const Q = () => {
  return (
    <button id="heater-1" className="drum-pad">
      <audio id="Q" className="clip">
        <source
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
          type="audio/mpeg"
        />
        <source src="../../assets/audio/Heater-1.mp3" type="audio/mpeg" />
      </audio>
      Q
    </button>
  );
};

export default Q;
