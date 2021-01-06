import React from 'react';


class Drumpad extends React.Component {

  // using lifecycle methods for key event listeners
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
    window.focus(); // so the keys are working immediately on (re)load
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = e => {
    if(e.keyCode === this.props.keyTrigger.charCodeAt()) {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.id);
    }
  }


  handleClick = () => {
    this.audio.play();
    // so we can hit one audio right after another
    this.audio.currentTime = 0;
    this.props.handleDisplay(this.props.id);
  }
  render() {
    return(
      <div 
        className="drum-pad" 
        id={this.props.id}
        onClick={this.handleClick}
      >
        <h1 className="keyes">{this.props.keyTrigger}</h1>
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