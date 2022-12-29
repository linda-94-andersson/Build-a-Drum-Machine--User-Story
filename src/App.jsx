import react from "react";
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
  return (
    <section>
      <div id="drum-machine">
        <div id="drum-pads">
          <Q />
          <W />
          <E />
          <A />
          <S />
          <D />
          <Z />
          <X />
          <C />
        </div>
        <Display />
      </div>
    </section>
  );
}

export default App;
