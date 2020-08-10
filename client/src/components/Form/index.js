// import React from "react";
// import "./style.css";

// export default function Form() {
//   return (
//     <div>
//       <h4 id="welcome">welcome to</h4>
//       <h1 id="logo">orchard</h1>
//       <form className="form">
//         <h6 className="form-font">Username</h6>
//         <input
//           name="username"
//           type="text"
//           placeholder="Username"
//         />
//         <h6 className="form-font">Password</h6>
//         <input
//           name="password"
//           type="password"
//           placeholder="Password"
//         />
//         <a href="/menu">Sign In</a>
//       </form>
//     </div>
//   )
// }
import React, { Component } from 'react';
import { login } from './UserFunctions';
import './style.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    login(user).then((res) => {
      if (res) {
        this.props.history.push(`/menu`);
      }
    });
  }

  render() {
    return (
      <div className="col-md-6 mt-5 mx-auto">
        <h4 id="welcome">welcome to</h4>
        <h1 id="logo">orchard</h1>
        <form noValidate onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="email"></label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="password"></label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-lg btn-dark btn-block"
          >
            Sign in
          </button>
        </form>
        <br />
        <p>
          If you are not a member, please <a href="/signup">Signup</a>
        </p>
      </div>
    );
  }
}

export default Login;
