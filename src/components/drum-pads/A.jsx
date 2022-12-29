import React from "react";

const A = () => {
  const playSound = () => {
    const audio = document.getElementById("A");
    audio.play();
  };

  const handleClick = () => {
    playSound();
  };

  const handleKey = (e) => {
    if (e.key === "a" || e.key === "A") {
      playSound();
    }
  };

  return (
    <button
      id="heater-4"
      className="drum-pad"
      onClick={handleClick}
      onKeyDown={(e) => handleKey(e)}
    >
      <audio
        id="A"
        className="clip"
        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
      >
        <source
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
          type="audio/mpeg"
        />
        <source src="../../assets/audio/Heater-4_1.mp3" type="audio/mpeg" />
      </audio>
      A
    </button>
  );
};

export default A;
