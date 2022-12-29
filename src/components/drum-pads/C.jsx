import React from "react";

const C = () => {
  const handleClick = () => {
    const audio = document.getElementById("C");
    audio.play();
  };

  return (
    <button id="closed-hh" className="drum-pad" onClick={handleClick}>
      <audio
        id="C"
        className="clip"
        src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
      >
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
