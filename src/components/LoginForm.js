import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }
  handleSumbit = (e) => {
    e.preventDefault();
    if (!this.state.username || !this.state.password) return;
    this.props.handleLogin(this.state)

  };

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(this.state[name]);
    this.state[name] = value;
  };
  render() {
    return (
      <form onSubmit={this.handleSumbit}>
        <div>
            <input
              id="username"
              name="username"
              type="text"
              placeholder ='Username'
              value={this.state.username}
              onChange={this.handleChange}
            />

        </div>
        <div>
            <input
              id="password"
              name="password"
              type="password"
              placeholder ='Password'
              value={this.state.password}
              onChange={this.handleChange}
            />
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
