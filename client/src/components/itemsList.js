import React, { Component } from 'react';
import axios from 'axios';

class Items extends Component {
  constructor() {
    super();
    this.state = {
      itemsList: [],
    };
  }

  //   componentDidMount() {
  //     fetch('/categories')
  //       .then((res) => res.json())
  //       .then((categories) =>
  //         this.setState({ categories }, () =>
  //           console.log('Categories fetched...', categories),
  //         ),
  //       );
  //   }

  componentDidMount() {
    axios.get(`/api/items/items`).then((res) => {
      const itemsList = res.data;
      this.setState({ itemsList });
      console.log(itemsList);
    });
  }

  render() {
    return (
      <div>
        <h2>Items</h2>
        <ul>
          {this.state.itemsList.map((itemsList) => (
            <li key={itemsList.id}>
              {itemsList.name},{itemsList.quantity}, {itemsList.price}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Items;
