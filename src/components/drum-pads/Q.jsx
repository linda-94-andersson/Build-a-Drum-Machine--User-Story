import React from "react";

const Q = () => {
  const playSound = () => {
    const audio = document.getElementById("Q");
    audio.play();
  };

  const handleClick = () => {
    playSound();
  };

  const handleKey = (e) => {
    if (e.key === "q" || e.key === "Q") {
      playSound();
    }
  };

  return (
    <button
      id="heater-1"
      className="drum-pad"
      onClick={handleClick}
      onKeyDown={(e) => handleKey(e)}
    >
      <audio
        id="Q"
        className="clip"
        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
      >
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
