import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Form from './components/Form';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import OrchardContainer from './components/OrchardContainer';
import Items from './components/itemsList';

function App() {
  return (
    <div className="everything">
      <Navbar />
      <Router>
        <Route exact path="/" component={Form} />
        <Route exact path="/menu" component={OrchardContainer} />
        <Route exact path="/items" component={Items} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
