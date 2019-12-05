import React, { Component } from "react";
import './App.css';
import RegisterContainerForm from './components/RegisterContainerForm'
import GoogleLogin from 'react-google-login'

export default class App extends Component {
  render() {
    const responseGoogle = (response) => {
      console.log(response)
    }
  return (
    <div>
    <div>
      <RegisterContainerForm/>
    </div>
    <div>
    <GoogleLogin
    clientId="467613427594-ols96qcde603evsgui93fugr5bb17rjf.apps.googleusercontent.com"
    buttonText="Register with Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
    </div>
    </div>
  );
}
}

