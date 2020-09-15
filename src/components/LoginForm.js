import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }
  handleLogin = (event) => {
    event.preventDefault();
    if (!this.state.username || !this.state.password) return;
    // this.setState({
    //   username: this.state.username,
    //   password: this.state.password,
    // });
    this.props.handleLogin(this.state)

  };
  handleChangeUsername = (event) => {
    this.state.username = event.target.value;
  };
  handleChangePassword = (event) => {
    this.state.password = event.target.value;
  };
  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleChangeUsername}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
          </label>
        </div>
        <div>
          <button type="submit">
            Log in
          </button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
