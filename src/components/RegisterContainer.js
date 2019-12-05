// import 'bootstrap/dist/css/bootstrap.css'
// import React, { Component } from 'react'
// import * as request from 'superagent'
// import { url } from '../url'

// export default class RegisterContainer extends Component {
//     state = {
//         fullName: "",
//         email: "",
//         password: ""
//     }

//     onChangeFullName = (event) => {
//         console.log("change fullName", event.target.value)
//         this.setState({
//             fullName: event.target.value
//         })
//     }

//     onChangeEmail = (event) => {
//         console.log("change email", event.target.value)
//         this.setState({
//             email: event.target.value
//         })
//     }

//     onChangePassword = (event) => {
//         console.log("change password", event.target.value)
//         this.setState({
//             password: event.target.value
//         })
//     }

//     onSubmit = (event) => {
//         event.preventDefault()
//         console.log("try to register w: ", this.state.fullName,"and", this.state.email, "and", this.state.password)
//         request.post(`${url}/register`)
//             .send({
//                 fullName: this.state.fullName,
//                 email: this.state.email,
//                 password: this.state.password
//             })
//             .catch(err => console.log(err))
//         this.setState({
//             fullName: "",
//             email: "",
//             password: ""
//         })
//     }

//     render() {
//         return (
//             <div>
//             <div className="add-form">
//                 <form onSubmit={this.onSubmit}>
//                         <input
//                             name="fullName"
//                             type="text"
//                             placeholder="Enter fullName"
//                             onChange={this.onChangeFullName}
//                             value={this.state.fullName}
//                             className="form-control mb-1 w-50">
//                             </input>
//                             <input
//                             name="email"
//                             type="text"
//                             placeholder="Enter email"
//                             onChange={this.onChangeEmail}
//                             value={this.state.email}
//                             className="form-control mb-1 w-50">
//                             </input>
//                     <input
//                         name="password"
//                         type="password"
//                         placeholder="password"
//                         onChange={this.onChangePassword}
//                         value={this.state.password} 
//                         className="form-control mb-1 w-50"
//                     >
//                     </input>
//                     <button type="submit" className="btn btn-danger w-30">Register</button>
//                 </form>
//             </div>
//             </div>
//         )
//     }
// }
