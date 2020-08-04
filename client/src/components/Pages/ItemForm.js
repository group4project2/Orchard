import React, { useState } from "react";

const [data,setData]=useState({
  name:"",
  quantity:"",
  expiration:""
})

state = {
  name: "",
  quantity: "",
  expiration: ""
};

handleInputChange = event => {
  // Getting the value and name of the input which triggered the change
  const newdata={...data}
  newdata[event.target.id]=event.target.value
  setData(newdata)
  let value = event.target.value;
  const name = event.target.name;
  // Updating the input's state
  this.set({
    [name]: value
  });
};

handleFormSubmit = event => {
  // Preventing the default behavior of the form submit (which is to refresh the page)
  event.preventDefault();
  console.log(this.state)
  if (!this.state.name || !this.state.quantity) {
    alert("Fill out the full information please!");
  } else {
    const options = {
      method: "POST"
  };
  
  fetch("localhost:3000/api/items", options)
      .then(data => console.log(data))
      .catch(error => console.error(error));
    alert(`${this.state.name} has been successfully saved`)
  }
};

export default function ItemForm() {

  return (
    <div>
      <p>
              Item Form
          </p>
          <form className="form" onSubmit={this.handleFormSubmit}>
            <input
              value={data.name}
              name="name"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Item Name"
              id="name"
            />
            <input
              value={data.quantity}
              name="quantity"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Quantity"
            />
            <input
              value={data.expiration}
              name="expiration"
              onChange={this.handleInputChange}
              type="expiration"
              placeholder="Expiration Date"
            />
            <button onClick={this.handleFormSubmit}>Submit</button>
          </form>
    </div>
  )
}