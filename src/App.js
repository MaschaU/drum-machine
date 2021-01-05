import React from 'react';
import './App.css';
import SoundData from "./SoundData";
import Drumpad from "./Drumpad";



class App extends React.Component {


  render() {
    return (
      <div id="drum-machine">
        <div id="display"></div>
        {/*mapping over the data from SoundData.js*/}
        {SoundData.map(data => (
          <Drumpad
          id={data.id}
          keyTrigger={data.keyTrigger}
          src={data.soundLink}
          />
        ))}

      </div>
    );
  }
}
  
export default App;

