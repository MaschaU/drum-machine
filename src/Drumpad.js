import React from "react";

class Drumpad extends React.Component {
  state = {
    info: "Press any of the keys below",
  };

  audioElements = {};

  createAudioElementReferencer = (key) => (ref) => this.audioElements[key.toLowerCase()] = ref;

  handleMessage = (info) => this.setState({ info });

  // using lifecycle methods for key event listeners
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
    window.focus(); // so the keys are working immediately on (re)load
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  playSound = (key) => {
    if (!this.audioElements[key]) return;

    this.handleMessage(this.audioElements[key].getAttribute('data-info'));

    this.audioElements[key].currentTime = 0;
    this.audioElements[key].play();
  };

  handleKeyDown = (evt) => this.playSound(evt.key);

  createClickHandlerForKey = (key) => () => this.playSound(key.toLowerCase());

  render() {
    const { info } = this.state;
    const { data } = this.props;
    return (
      <>
        <div id="display">{info}</div>

        <div id="drum-pads">
          {data.map((sound) => (
            <div
              key={sound.id}
              className="drum-pad"
              id={sound.id}
              onClick={this.createClickHandlerForKey(sound.keyTrigger)}
            >
              <h1 className="keyes">{sound.keyTrigger}</h1>

              <audio
                data-info={sound.id}
                src={sound.soundLink}
                ref={this.createAudioElementReferencer(sound.keyTrigger)}
              />
            </div>
          ))}
        </div>
      </>
    );
  }
}
export default Drumpad;
