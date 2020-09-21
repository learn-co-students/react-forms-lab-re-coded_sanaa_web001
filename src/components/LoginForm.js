import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
        username: '',
        password: '',
    };
  }

  handleUserNameChange = event => {
    this.setState({
      username: event.target.value
    })
  }
  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={e =>{ e.preventDefault();
      if (this.state.username && this.state.password) 
      return this.props.handleLogin(this.state)}
      }>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username}
     onChange={this.handleUserNameChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password}
     onChange={this.handlePasswordChange} />
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
