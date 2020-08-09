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
    // this.setState({ [event.target.quantity]: event.target.value });
    // this.setState({ [event.target.price]: event.target.value });
    // this.setState({
    //   [event.target.date_received]: event.target.value,
    // });
    // this.setState({ [event.target.exp_date]: event.target.value });
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
        // this.props.history.push(`/`);
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

// import React, { Component } from 'react';
// const axios = require('axios');

// class ItemForm extends Component {
//   // Setting the component's initial state
//   constructor(){
//     super();
//     this.state = {
//       name: '',
//       quantity: '',
//       exp_date: '',
//     };
//     this.onChange = this.onChange.bind(this);
//     this.handleInputChange = this.onChange.bind(this);
//   }
// onChange(event){
//   this.setState({[event.target.name]: event.target.value})
// }
//   handleInputChange(event) {
//     event.preventDefault();
//     // Getting the value and name of the input which triggered the change

//     // let value = event.target.value;
//     // const name = event.target.name;
//     // // Updating the input's state
//     // this.setState({
//     //   [name]: value,
//     // });
//     const newItem = {
//       name: this.state.name,
//       quantity: this.state.quantity,
//       exp_date: this.state.exp_date,
//     }
//   };

//   handleFormSubmit = (event) => {
//     // Preventing the default behavior of the form submit (which is to refresh the page)

//     event.preventDefault();
//     if (!this.state.name || !this.state.quantity) {
//       alert('Fill out the full information please!');
//     } else {
//       axios
//         .post(`http://localhost:3001/api/items/items`)
//         .then((req, res) => {
//           const itemsList = req.body;
//           console.log('TESTING req.body', this.state.name);
//           res.send('it works!');

//           this.setState({ itemsList });
//           res.end();
//           // console.log(itemsList);
//         });
//       // once submit button is clicked need to send item form information to items database
//       // Using axios.post. Then need a .then(res.send(form submitted). Look up documentation to make this work

//       alert(`${this.state.name} has been successfully saved`);
//     }

//     this.setState({
//       name: '',
//       quanitity: '',
//       exp_date: '',
//     });
//   };

//   render() {
//     // Notice how each input has a `value`, `name`, and `onChange` prop
//     return (
//       <div>
//         <p>Item Form</p>
//         <form className="form">
//           <input
//             value={this.state.name}
//             name="name"
//             onChange={this.handleInputChange}
//             type="text"
//             placeholder="Item Name"
//           />
//           <input
//             value={this.state.quantity}
//             name="quantity"
//             onChange={this.handleInputChange}
//             type="text"
//             placeholder="Quantity"
//           />
//           <input
//             value={this.state.exp_date}
//             name="exp_date"
//             onChange={this.handleInputChange}
//             type="exp_date"
//             placeholder="exp_date"
//           />
//           <button onClick={this.handleFormSubmit}>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default ItemForm;
