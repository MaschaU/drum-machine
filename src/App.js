import React from 'react';
import './App.css';
import SoundData from "./SoundData";
import Drumpad from "./Drumpad";



class App extends React.Component {
  state = {
      display: ""
    }

    handleDisplay = display => this.setState({display});

  render() {
    return (
      <div id="drum-machine">
        <div id="display">{this.state.display}</div>
        {/*mapping over the data from SoundData.js*/}
        <div id="drum-pads">
          {SoundData.map(data => (
            <Drumpad
            id={data.id}
            keyTrigger={data.keyTrigger}
            soundLink={data.soundLink}
            handleDisplay={this.handleDisplay}
            />
            ))}
        </div>
        
      </div>
    );
  }
}
  
export default App;

