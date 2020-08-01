import React, { Component } from "react";
// import Menu from "../Menu";
import "./style.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: " ",
      password: " "
    };
  }
  // Setting the component's initial state
  
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    prompt(`Hello ${this.state.username} ! Would you like to manage your inventory or log out? Click OK to continue.`)
    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        Welcome to Orchard
        <form className="form">
          <input
            name="username"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Username"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;