import React, { Component } from "react";
import './App.css';
import RegisterContainer from './components/RegisterContainer'
import GoogleLogin from 'react-google-login'

//delete later - just testing
import RegisterForm from './components/RegisterForm'

export default class App extends Component {
  render() {
    const responseGoogle = (response) => {
      console.log(response)
    }
  return (
    <div>
    <RegisterForm/>
    </div>
  );
}
}




// <div>
// <GoogleLogin
// clientId="467613427594-ols96qcde603evsgui93fugr5bb17rjf.apps.googleusercontent.com"
// buttonText="Sign in with Google"
// onSuccess={responseGoogle}
// onFailure={responseGoogle}
// cookiePolicy={'single_host_origin'}
// />
// </div>