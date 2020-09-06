import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
    };
  }

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  remainingChars = (message, charsNumbers) => {
    return charsNumbers - message.split("").length;
  };

  remainingCharsBox = (remainingChars) => {
    return <div>{remainingChars}</div>;
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={(event) => this.handleMessageChange(event)}
        />
        {this.remainingCharsBox(
          this.remainingChars(this.state.message, this.props.maxChars)
        )}
      </div>
    );
  }
}

export default TwitterMessage;
