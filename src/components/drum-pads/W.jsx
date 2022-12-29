import React from "react";

const W = () => {
  return (
    <button id="heater-2" className="drum-pad">
      <audio id="W" className="clip">
        <source
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
          type="audio/mpeg"
        />
        <source src="../../assets/audio/Heater-2.mp3" type="audio/mpeg" />
      </audio>
      W
    </button>
  );
};

export default W;
