import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Card from '../Card';

class Menu extends Component {
  render() {
    return (
      <div>
        <Link to="/add-inventory">
          <Card heading="Click Add Item to add something to your inventory." />
        </Link>
        <Link to="/edit-item">
          <Card heading="Click Edit Item edit something in your inventory" />
        </Link>
        <Link to="/items">
          <Card heading="View Items List" />
        </Link>
      </div>
    );
  }
}

export default withRouter(Menu);
