import React from 'react';


class Drumpad extends React.Component {

  handleClick = () => {
    this.audio.play()
    // so we can hit one audio right after another
    this.audio.currentTime = 0
  }
  render() {
    return(
      <div 
        className="drum-pad" 
        id={this.props.id}
        onClick={this.handleClick}
      >
        <p>{this.props.keyTrigger}</p>
        <audio
          ref={ref => this.audio = ref}
          className="clip" 
          id={this.props.keyTrigger} 
          src={this.props.soundLink}>
        </audio>
      </div>
    );
  }
}
export default Drumpad;