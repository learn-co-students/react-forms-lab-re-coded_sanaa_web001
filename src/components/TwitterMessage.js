import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = { message: "" };
  }
  handleChangeMessage = (event) => {
    this.setState({ message: event.target.value });
  };
  render() {
    let charNumber = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={this.handleChangeMessage}
        />
        {charNumber}
      </div>
    );
  }
}

export default TwitterMessage;
