// import React, { Component } from 'react';
// import NavTabs from './NavTabs';
// import Menu from './Pages/Menu';
// import Add from './Pages/Add';
// import View from './Pages/View';
// import Contact from './Pages/Contact';
// import About from './Pages/About'

// class OrchardContainer extends Component {
//   state = {
//     currentPage: 'Menu',
//   };

//   handlePageChange = (page) => {
//     this.setState({ currentPage: page });
//   };

//   renderPage = () => {
//     if (this.state.currentPage === 'Menu') {
//       return <Menu />;
//     } else if (this.state.currentPage === 'Add') {
//       return <Add />;
//     } else if (this.state.currentPage === 'Contact') {
//       return <Contact />;
//     } else if (this.state.currentPage === 'View') {
//       return <View />;
//     } else if (this.state.currentPage === 'About') {
//       return <About />;
//     } else {
//       return <Menu />;
//     }
//   };

//   render() {
//     return (
//       <div>
//         <NavTabs
//           currentPage={this.state.currentPage}
//           handlePageChange={this.handlePageChange}
//         />
//         {this.renderPage()}
//       </div>
//     );
//   }
// }

// export default OrchardContainer;
import React, { Component } from 'react';
import NavTabs from './NavTabs';
import Menu from './Pages/Menu';
import Add from './Pages/Add';
import View from './Pages/View';
import Contact from './Pages/Contact';
import About from './Pages/About';

class OrchardContainer extends Component {
  state = {
    currentPage: 'Menu',
  };

  /* logOut(e) {
    e.preventDefault();
    localStorage.removeItem('usertoken');
    this.props.history.push(`/`);
  } */

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === 'Menu') {
      return <Menu />;
    } else if (this.state.currentPage === 'Add') {
      return <Add />;
    } else if (this.state.currentPage === 'View') {
      return <View />;
    } else if (this.state.currentPage === 'Contact') {
      return <Contact />;
    } else if (this.state.currentPage === 'About') {
      return <About />;
    } else {
      return <Menu />;
    }
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default OrchardContainer;
