import React from "react";
import "./style.css";

export default function Form() {
  return (
    <div>
      Welcome to Orchard
      <form className="form">
        <input
          name="username"
          type="text"
          placeholder="Username"
        />
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