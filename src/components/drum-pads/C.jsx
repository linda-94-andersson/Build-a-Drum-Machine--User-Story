import React from "react";

const C = ({ onButtonClick }) => {
  const playSound = () => {
    const audio = document.getElementById("C");
    audio.play();
  };

  const handleClick = () => {
    playSound();
    onButtonClick("closed-hh");
  };

  const handleKey = (e) => {
    if (e.key === "c" || e.key === "C") {
      playSound();
      onButtonClick("closed-hh");
    }
  };

  return (
    <button
      id="closed-hh"
      className="drum-pad"
      onClick={handleClick}
      onKeyDown={(e) => handleKey(e)}
    >
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
