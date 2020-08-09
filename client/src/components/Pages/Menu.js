import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Card from '../Card';

class Menu extends Component {
  render() {
    return (
      <div>
        {/* add button */}
        <Link to="/#Add">
          <Card heading="Add Items to inventory" />
        </Link>
        {/* view button */}
        <Link to="/items">
          <Card heading="View Items List" />
        </Link>
      </div>
    );
  }
}

export default withRouter(Menu);
