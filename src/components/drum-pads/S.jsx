import React from "react";

const S = ({ onButtonClick }) => {
  const playSound = () => {
    const audio = document.getElementById("S");
    audio.play();
  };

  const handleClick = () => {
    playSound();
    onButtonClick("clap");
  };

  const handleKey = (e) => {
    if (e.key === "s" || e.key === "S") {
      playSound();
      onButtonClick("clap");
    }
  };

  return (
    <button
      id="clap"
      className="drum-pad"
      onClick={handleClick}
      onKeyDown={(e) => handleKey(e)}
    >
      <audio
        id="S"
        className="clip"
        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
      >
        <source
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
          type="audio/mpeg"
        />
        <source src="../../assets/audio/Heater-6.mp3" type="audio/mpeg" />
      </audio>
      S
    </button>
  );
};

export default S;
