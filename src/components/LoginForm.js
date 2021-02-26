import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }
  handleInputChange = (e)=> {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.username.length > 0 & this.state.password.length > 0){
      this.props.handleLogin({username: this.state.username, password: this.state.password})
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" onChange={this.handleInputChange} value={this.state.username} name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" onChange={this.handleInputChange} value={this.state.password} name="password" type="password" />
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
