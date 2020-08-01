import React, { Component } from "react";
import Card from "../Card";

class Menu extends Component {
  render() {
    return (
      <div>
        <Card heading="Add Item" />
        <Card heading="Edit Item"/>
      </div>
    );
  }
}

export default Menu;
