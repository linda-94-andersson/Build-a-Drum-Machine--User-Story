import React from "react";

const D = () => {
  const handleClick = () => {
    const audio = document.getElementById("D");
    audio.play();
  };

  return (
    <button id="open-hh" className="drum-pad" onClick={handleClick}>
      <audio id="D" className="clip">
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
