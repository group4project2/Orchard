import React, { useState } from "react";

export default function ItemForm() {
  const [data,setData]=useState(' ')
  
  let handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const newdata={...data}
    newdata[event.target.id]=event.target.value
    setData(newdata)
    // Updating the input's state
  };
  
  let handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.name || !this.state.quantity) {
      alert("Fill out the full information please!");
    } else {
      const options = {
        method: "POST"
    };
    
    fetch("localhost:3001/api/items", options)
        .then(data => console.log(data))
        .catch(error => console.error(error));
      alert(`${this.state.name} has been successfully saved`)
    }
  };
  return (
    <div>
      <p>
              Item Form
          </p>
          <form className="form" onSubmit={handleFormSubmit}>
            <input
              value={data.name}
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="Item Name"
              id="name"
            />
            <input
              value={data.quantity}
              name="quantity"
              onChange={handleInputChange}
              type="text"
              placeholder="Quantity"
            />
            <input
              value={data.expiration}
              name="expiration"
              onChange={handleInputChange}
              type="expiration"
              placeholder="Expiration Date"
            />
            <button onClick={handleFormSubmit}>Submit</button>
          </form>
    </div>
  )
}