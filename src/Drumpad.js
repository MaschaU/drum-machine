import React from 'react';
import SoundData from "./SoundData";

class Drumpad extends React.Component {
  render() {
    return(
      <div className="drum-pad" id={this.props.id}>
        <p>{this.props.keyTrigger}</p>
        <audio
          className="clip" 
          id={this.props.keyTrigger} 
          src={this.props.soundLink}>
        </audio>
      </div>
    );
  }
}
export default Drumpad;