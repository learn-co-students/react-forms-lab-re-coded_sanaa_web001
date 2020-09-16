import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super();

    this.state = {
      username:props.username,
      password:props.password
    };
  }
  handleInputChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    }
    )
  }

  render() {
    return (
      <form  onSubmit={(e)=>{
        e.preventDefault();
        if(!this.state.username || !this.state.password) return
        this.props.handleLogin(this.state)}}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" 
            value={this.state.username} onChange={(e)=>this.handleInputChange(e)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password"  
            value={this.props.password} onChange={(e)=>this.handleInputChange(e)} />
          </label>
        </div>
        <div>
          <button type="submit"
         
           >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
