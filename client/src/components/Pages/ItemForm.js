import React, { Component } from "react";

class ItemForm extends Component {
    // Setting the component's initial state
    state = {
      name: "",
      quantity: "",
      expiration: ""
    };
  
    handleInputChange = event => {
      // Getting the value and name of the input which triggered the change
      let value = event.target.value;
      const name = event.target.name;
      // Updating the input's state
      this.setState({
        [name]: value
      });
    };
  
    handleFormSubmit = event => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      event.preventDefault();
      if (!this.state.name || !this.state.quantity) {
        alert("Fill out the full information please!");
      } else {
        alert(`${this.state.firstName} has been successfully saved`);
      }
  
      this.setState({
        firstName: "",
        lastName: "",
        password: ""
      });
    };
  
    render() {
      // Notice how each input has a `value`, `name`, and `onChange` prop
      return (
        <div>
          <p>
              Item Form
          </p>
          <form className="form">
            <input
              value={this.state.name}
              name="name"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Item Name"
            />
            <input
              value={this.state.quantity}
              name="quantity"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Quantity"
            />
            <input
              value={this.state.expiration}
              name="expiration"
              onChange={this.handleInputChange}
              type="expiration"
              placeholder="expiration"
            />
            <button onClick={this.handleFormSubmit}>Submit</button>
          </form>
        </div>
      );
    }
  }
  
    
export default ItemForm;