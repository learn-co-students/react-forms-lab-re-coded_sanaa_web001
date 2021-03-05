import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handlechange = e => {
    this.setState({
      [e.target.name] : e.target.value
    })
    console.log(this.state)
  }

  handlesubmit = e => {
    e.preventDefault()
    if(this.state.username.length !== 0 && this.state.password.length !== 0 ) {
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={ this.handlesubmit } >
        <div>
          <label>
            Username
            <input id="username" name="username" value={this.state.username} type="text" onChange={this.handlechange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" value={this.state.password} type="password" onChange={this.handlechange} />
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
