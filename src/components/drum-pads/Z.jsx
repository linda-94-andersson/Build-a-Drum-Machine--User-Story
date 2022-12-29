import React from "react";

const Z = () => {
  const handleClick = () => {
    const audio = document.getElementById("Z");
    audio.play();
  };

  return (
    <button id="kick-n'-hat" className="drum-pad" onClick={handleClick}>
      <audio id="Z" className="clip">
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
