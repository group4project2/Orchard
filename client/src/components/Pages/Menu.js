import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Card from '../Card';

class Menu extends Component {
  render() {
    return (
      <div>
          <Card heading="Click Add Item to add something to your inventory." />
        <Link to="/items">
          <Card heading="View Items List" />
        </Link>
      </div>
    );
  }
}

export default withRouter(Menu);
