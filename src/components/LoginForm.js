import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:" ",
      password: " "
    };
  }
handlChangeName = event =>{
  this.setState( {
    username:event.target.value
  })
}

handlChangePass = event =>{
  this.setState( {
    password:event.target.value
  })
}
handleSubmit =event =>{
   event.preventDefault();
   if(this.state.username !=="" && this.state.password !==""){
     this.props.handleLogin(this.state.username,this.state.password);
   }
   else return
}
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handlChangeName} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handlChangePass} value={this.state.username} />
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


// 4) <LoginForm /> Saving input values in state should save the username in state when the input changes:
     
//   5) <LoginForm /> Saving input values in state should save the password in state when the input changes:
    

//   6) <LoginForm /> Calling `handleLogin` callback prop should call the prevent the default action when the form is being submitted:
     

//   7) <LoginForm /> Calling `handleLogin` callback prop should call the `handleLogin` callback prop when the form is being submitted:
     