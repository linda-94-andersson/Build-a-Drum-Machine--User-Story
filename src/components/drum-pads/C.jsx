import React from "react";

const C = () => {
  return (
    <button id="closed-hh" className="drum-pad">
      <audio id="C" className="clip">
        <source
          src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
          type="audio/mpeg"
        />
        <source src="../../assets/audio/Cev_H2.mp3" type="audio/mpeg" />
      </audio>
      C
    </button>
  );
};

export default C;
