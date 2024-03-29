import React from "react";

const W = ({ onButtonClick }) => {
  const playSound = () => {
    const audio = document.getElementById("W");
    audio.play();
  };

  const handleClick = () => {
    playSound();
    onButtonClick("heater-2");
  };

  const handleKey = (e) => {
    if (e.key === "w" || e.key === "W") {
      playSound();
      onButtonClick("heater-2");
    }
  };

  return (
    <button
      id="heater-2"
      className="drum-pad"
      onClick={handleClick}
      onKeyDown={(e) => handleKey(e)}
    >
      <audio
        id="W"
        className="clip"
        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
      >
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
