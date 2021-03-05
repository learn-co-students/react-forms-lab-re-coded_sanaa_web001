import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  handlechange = e => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>{ this.props.maxChars - this.state.text.length }</strong>
        <input type="text" name="message" id="message" value={this.state.text} onChange={ e => this.handlechange(e) } />
      </div>
    );
  }
}

export default TwitterMessage;
