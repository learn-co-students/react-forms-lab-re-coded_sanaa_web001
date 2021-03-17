import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:"",
      password:"",
      submitted:[]
    };
  }

  handleChange = (event)=>{
    this.setState({
      [event.target.name]:event.target.value
    })
  }


  handleSubmit=(event)=>{
    event.preventDefault()
    if (this.state.username !== null
    && this.state.password !== null)
    {
      let formData = {username: this.state.username, password: this.state.password}
      let Array = this.state.submitted.concat(formData)
      this.setState({
        submitted: Array
      })
    }
  }

  submissionlist = ()=>{
    this.state.submitted.map(data=>{
      return <h1>{data.username}</h1>
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={event=>this.state.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text"
            onChange={event=>this.handleChange(event)}
            value={this.state.username}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password"
            onChange={event=>this.handleChange(event)}
            value={this.state.password}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
      {this.submissionlist()}
      </div>
      
    );
  }
}

export default LoginForm;
