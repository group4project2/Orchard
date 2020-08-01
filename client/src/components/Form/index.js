import React, { Component } from 'react';
import './style.css';

class Form extends Component {
  // Setting the component's initial state
  state = {
    username: '',
    password: '',
  };

  callMyBackEnd = (event) => {
    var axios = require('axios');
    var data = JSON.stringify({
      routeName: 'bluemarvel',
      name: 'Blue Marvel',
      role: 'Just Awesome',
      age: 200,
      forcePoints: 1200,
    });

    var config = {
      method: 'get',
      url: '/api/users/users',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        this.setState({
          username: '',
          password: '',
          myData: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    // const { name, value } = event.target;
    const name = event.target.name;
    const value = event.target.value;
    // Updating the input's state
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    this.callMyBackEnd();
  };

  // Lifecycle methods
  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <h1>
          Welcome to Orchard 🍊
        </h1>
        Put your best fruit forward{' '}
        <form className="form">
          <input
            value={this.state.username}
            name="username"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Username"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
