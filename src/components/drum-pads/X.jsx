import React from "react";

const X = ({ onButtonClick }) => {
  const playSound = () => {
    const audio = document.getElementById("X");
    audio.play();
  };

  const handleClick = () => {
    playSound();
    onButtonClick("kick");
  };

  const handleKey = (e) => {
    if (e.key === "x" || e.key === "X") {
      playSound();
      onButtonClick("kick");
    }
  };

  return (
    <button
      id="kick"
      className="drum-pad"
      onClick={handleClick}
      onKeyDown={(e) => handleKey(e)}
    >
      <audio
        id="X"
        className="clip"
        src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
      >
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
