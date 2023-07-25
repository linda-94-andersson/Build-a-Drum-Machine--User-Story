import React from "react";

const Z = ({ onButtonClick }) => {
  const playSound = () => {
    const audio = document.getElementById("Z");
    audio.play();
  };

  const handleClick = () => {
    playSound();
    onButtonClick("kick-n'-hat");
  };

  const handleKey = (e) => {
    if (e.key === "z" || e.key === "Z") {
      playSound();
      onButtonClick("kick-n'-hat");
    }
  };

  return (
    <button
      id="kick-n'-hat"
      className="drum-pad"
      onClick={handleClick}
      onKeyDown={(e) => handleKey(e)}
    >
      <audio
        id="Z"
        className="clip"
        src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
      >
        <source
          src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
          type="audio/mpeg"
        />
        <source src="../../assets/audio/Kick_n_Hat.mp3" type="audio/mpeg" />
      </audio>
      Z
    </button>
  );
};

export default Z;
