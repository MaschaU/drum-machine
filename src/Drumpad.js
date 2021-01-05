import React from 'react';
import SoundData from "./SoundData";

class Drumpad extends React.Component {
  render() {
    return(
      <div className="drum-pad" id={this.props.id}>
        <p>{this.props.keyTrigger}</p>
      </div>
    );
  }
}
export default Drumpad;