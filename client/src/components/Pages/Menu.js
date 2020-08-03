import React, { Component } from "react";
import Card from "../Card";

class Menu extends Component {
  render() {
    return (
      <div>
        <a href="./add"><Card 
          heading="Add Item"
          cardText="Click here to add something to your inventory."
        />
        </a>
        <Card 
          heading="Edit Item" 
          cardText="Click here to edit something in your inventory."
        />
        <Card 
          heading="View Inventory" 
          cardText="Click here to view your inventory."
        />
        <Card 
          heading="Delete Item" 
          cardText="Click here to remove something in your inventory."
        />
      </div>
    );
  }
}

export default Menu;
