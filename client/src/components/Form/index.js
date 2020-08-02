import React from "react";
import "./style.css";

export default function Form() {
  return (
    <div>
      <h4 id="welcome">welcome to</h4>
      <h1 id="logo">orchard</h1>
      <form className="form">
        <h6 className="form-font">Username</h6>
        <input
          name="username"
          type="text"
          placeholder="Username"
        />
        <h6 className="form-font">Password</h6>
        <input
          name="password"
          type="password"
          placeholder="Password"
        />
        <a href="/menu">Sign In</a>
      </form>
    </div>
  )
}