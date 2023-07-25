import React from "react";

const E = ({ onButtonClick }) => {
  const playSound = () => {
    const audio = document.getElementById("E");
    audio.play();
  };

  const handleClick = () => {
    playSound();
    onButtonClick("hearer-3");
  };

  const handleKey = (e) => {
    if (e.key === "e" || e.key === "E") {
      playSound();
      onButtonClick("hearer-3");
    }
  };

  return (
    <button
      id="hearer-3"
      className="drum-pad"
      onClick={handleClick}
      onKeyDown={(e) => handleKey(e)}
    >
      <audio
        id="E"
        className="clip"
        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
      >
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
