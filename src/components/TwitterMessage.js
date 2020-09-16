import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      remaining:props.maxChars,
      message:' '
    };
  }
handleInput=(e)=>{
  console.log(e)
  this.setState({
    remaining:this.props.maxChars-e.target.value.length,
    message:e.target.value
  })
}
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={(e)=>this.handleInput(e)} />
        <span>remaining charecters : {this.state.remaining} </span>
      </div>
    );
  }
}

export default TwitterMessage;
