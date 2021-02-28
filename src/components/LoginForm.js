import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username:'',
      password:''
    };
  }

  handechange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }


onSubmit=(e)=>{
  e.preventDefault();
  if(this.state.username.length > 0 & this.state.password.length > 0){
  this.props.handleLogin({username: this.state.username, password: this.state.password})

}
}

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            Username
            <input onChange={this.handechange} value={this.state.username} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" onChange={this.handechange} value={this.state.password} name="password" type="password" />
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
