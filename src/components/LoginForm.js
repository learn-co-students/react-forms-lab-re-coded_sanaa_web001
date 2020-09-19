import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:"",
      password:""
    };
  }
usernameChangeHandler=(event)=>{
this.setState(({username:event.target.value}))
    }
    passwordChangeHandler=(event)=>{
this.setState({password:event.target.value})
    }

    formSubmit=(event)=>{
      event.preventDefault();
      if(this.state.password!=""&&this.state.username!="")
      this.props.handleLogin(this.state.username,this.state.password);
    }
  render() {
    return (
      <form  onSubmit={this.formSubmit}>
        <div>
          <label>
            Username
            <input value={this.state.username} id="username" name="username" type="text" onChange={this.usernameChangeHandler}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input value={this.state.password} id="password" name="password" type="password" 
            onChange={this.passwordChangeHandler}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
