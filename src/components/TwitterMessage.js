import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message:"",
      remainingChars:0
    };
  }
  twittHandler=(event)=>{
    // console.log(event.target.value.length);
    if(event.target.value.length<=this.props.maxChars){
      this.setState(({message:event.target.value,
      remainingChars:event.target.value.length}))
      
    }
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.twittHandler} value={this.state.message}/>
        <p>Remaining chars: {this.props.maxChars-this.state.remainingChars}</p>
        </div>
    );
  }
}

export default TwitterMessage;


{/* <TwitterMessage /> Saving input value in state should update the state when typing:
<TwitterMessage /> Character counter should show the remaining characters counter:
 <TwitterMessage /> Character counter should update the counter when typing: */}
