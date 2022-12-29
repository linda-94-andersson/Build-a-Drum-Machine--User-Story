import React from "react";

const X = () => {
  return (
    <button id="kick" className="drum-pad">
      <audio id="X" className="clip">
        <source
          src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
          type="audio/mpeg"
        />
        <source src="../../assets/audio/RP4_KICK_1.mp3" type="audio/mpeg" />
      </audio>
      X
    </button>
  );
};

export default X;
