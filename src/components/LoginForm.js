import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }
  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  handlesubmit = (e) => {
    e.preventDefault()
    let username = this.state.username
    let password = this.state.password
    if (username && password !== "") {
      this.props.handleLogin({ username, password })
    }
    this.setState({
      username: '',
      password: ''
    })
  }
  render() {
    return (
      <form onSubmit={this.handlesubmit}>
        <div>
          <label>
            Username
            <input onChange={this.handleInput} id="username" name="username" type="text" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.handleInput} id="password" name="password" type="password" value={this.state.password} />
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
