import React from "react";

const W = () => {
  const handleClick = () => {
    const audio = document.getElementById("W");
    audio.play();
  };

  return (
    <button id="heater-2" className="drum-pad" onClick={handleClick}>
      <audio id="W" className="clip">
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
