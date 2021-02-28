import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      inputCharacter: 0,
      username: ''
    };
  }
  handelCounter = (e) => {
    this.setState({ username: e.target.value })
    this.setState((pre) => {
      return {
        inputCharacter: pre.inputCharacter + 1,
      }
    })
  }

  render() {
    return (
      <div>
        <strong>Your message: {this.props.maxChars - this.state.inputCharacter}</strong>
        <input onChange={this.handelCounter} type="text" value={this.state.username}
          name="message" id="message" />
      </div>
    );
  }
}

export default TwitterMessage;
