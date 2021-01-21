import React from "react";
import "./App.css";
import SoundData from "./SoundData";
import Drumpad from "./Drumpad";

const App = () => (
  <div id="drum-machine">
    <h1 className="header">Drum Machine</h1>
    <Drumpad data={SoundData} />
  </div>
);

export default App;
