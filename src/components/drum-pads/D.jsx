import React from "react";

const D = () => {
  const playSound = () => {
    const audio = document.getElementById("D");
    audio.play();
  };

  const handleClick = () => {
    playSound();
  };

  const handleKey = (e) => {
    if (e.key === "d" || e.key === "D") {
      playSound();
    }
  };

  return (
    <button
      id="open-hh"
      className="drum-pad"
      onClick={handleClick}
      onKeyDown={(e) => handleKey(e)}
    >
      <audio
        id="D"
        className="clip"
        src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
      >
        <source
          src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
          type="audio/mpeg"
        />
        <source src="../../assets/audio/Dsc_Oh.mp3" type="audio/mpeg" />
      </audio>
      D
    </button>
  );
};

export default D;
