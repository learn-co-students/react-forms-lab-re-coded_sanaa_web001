import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      input: ''
    };
  }


  changeInput = event => {
    this.setState({
      input: event.target.value
    })
  }

  render() {
    let letters = this.props.maxChars - this.state.input.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.changeInput} value={this.state.input}/>
        {letters}
      </div>
    );
  }
}

export default TwitterMessage;