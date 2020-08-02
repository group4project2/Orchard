import React, { Component } from "react";
import Card from "../Card";

class Menu extends Component {
  render() {
    return (
      <div>
        <Card heading="Click Add Item to add something to your inventory." />
        <Card heading="Click Edit Item edit something in your inventory"/>
      </div>
    );
  }
}

export default Menu;
