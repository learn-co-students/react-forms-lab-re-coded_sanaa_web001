import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleMessageChange = e =>{
      this.setState({
        message: e.target.value
      })
    }

  render() {
    let charLeft = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"  onChange={e =>{this.handleMessageChange(e)}} name="message" value={this.state.message} id="message" />
        <p>{charLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
