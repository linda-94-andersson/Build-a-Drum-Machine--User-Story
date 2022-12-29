import React from "react";

const E = () => {
  return (
    <button id="hearer-3" className="drum-pad">
      <audio id="E" className="clip">
        <source
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
          type="audio/mpeg"
        />
        <source src="../../assets/audio/Heater-3.mp3" type="audio/mpeg" />
      </audio>
      E
    </button>
  );
};

export default E;
