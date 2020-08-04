import React, { Component } from "react";
import { Link } from 'react-router-dom';

import Card from "../Card";

class Menu extends Component {
  render() {
    return (
      <div>
        <Link to="/add"><Card heading="Click Add Item to add something to your inventory." /></Link>
        <Card heading="Click Edit Item edit something in your inventory"/>
      </div>
    );
  }
}

export default Menu;
