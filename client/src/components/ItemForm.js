import React, { Component } from 'react';
import { item } from './userFunctions';

export default class ItemForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      quantity: '',
      price: '',
      date_received: '',
      exp_date: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleFormSubmit(event) {
    event.preventDefault();

    const itemList = {
      name: this.state.name,
      quantity: this.state.quantity,
      price: this.state.price,
      date_received: this.state.date_received,
      exp_date: this.state.exp_date,
    };

    if (!this.state.name || !this.state.quantity) {
      alert('Fill out the full information please!');
    } else {
      item(itemList).then((res) => {
        alert(`${this.state.name} has been successfully saved`);
      });
    }
  }

  render() {
    return (
      <div>
        <p>Item Form</p>
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
            type="number"
            placeholder="Quantity"
          />
          <input
            value={this.state.price}
            name="price"
            onChange={this.handleInputChange}
            type="decimal"
            placeholder="Price (i.e. 1.5 or .85)"
          />
          Date received:
          <input
            value={this.state.date_received}
            name="date_received"
            onChange={this.handleInputChange}
            type="date"
            placeholder="Date Received"
          />
          Expiration Date:
          <input
            value={this.state.exp_date}
            name="exp_date"
            onChange={this.handleInputChange}
            type="date"
            placeholder="exp_date"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
