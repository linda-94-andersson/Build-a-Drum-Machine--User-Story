import React, { useState } from "react";
import Display from "./components/Display";
import A from "./components/drum-pads/A";
import C from "./components/drum-pads/C";
import D from "./components/drum-pads/D";
import E from "./components/drum-pads/E";
import Q from "./components/drum-pads/Q";
import S from "./components/drum-pads/S";
import W from "./components/drum-pads/W";
import X from "./components/drum-pads/X";
import Z from "./components/drum-pads/Z";

function App() {
  const [buttonId, setButtonId] = useState("");

  const handleButtonClick = (id) => {
    setButtonId(id);
  };

  return (
    <section>
      <div id="drum-machine">
        <div id="drum-pads">
          <Q onButtonClick={handleButtonClick} />
          <W onButtonClick={handleButtonClick} />
          <E onButtonClick={handleButtonClick} />
          <A onButtonClick={handleButtonClick} />
          <S onButtonClick={handleButtonClick} />
          <D onButtonClick={handleButtonClick} />
          <Z onButtonClick={handleButtonClick} />
          <X onButtonClick={handleButtonClick} />
          <C onButtonClick={handleButtonClick} />
        </div>
        <Display text={buttonId} />
      </div>
    </section>
  );
}

export default App;
