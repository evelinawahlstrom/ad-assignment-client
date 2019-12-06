import React, { Component } from 'react'
import * as request from 'superagent'
import { url } from '../url'
import RegisterForm from './RegisterForm'

export default class RegisterContainer extends Component {
    state = {
        fullName: "",
        email: "",
        password: ""
    }
    onSubmit = (event) => {
        event.preventDefault()
        console.log("try to register w: ", this.state.fullName, "and", this.state.email, "and", this.state.password)
        request.post(`${url}/register`)
            .send({
                fullName: this.state.fullName,
                email: this.state.email,
                password: this.state.password
            })
            .catch(err => console.log(err))
            this.setState({
            fullName: "",
            email: "",
            password: ""
        })
    }
    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    render() {
        return (
            <div>
                <div>
                    <RegisterForm
                        onSubmit={this.onSubmit}
                        onChange={this.onChange}
                        values={this.state}
                    />
                </div>
            </div>
        )
    }
}
