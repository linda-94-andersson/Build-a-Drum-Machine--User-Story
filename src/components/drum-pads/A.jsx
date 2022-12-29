import React from "react";

const A = () => {
  const handleClick = () => {
    const audio = document.getElementById("A");
    audio.play();
  };

  return (
    <button id="heater-4" className="drum-pad" onClick={handleClick}>
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
