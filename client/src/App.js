import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Form from "./components/Form";
import Menu from "./components/Pages/Menu";



function App() {
  return (
    <div class name="everything">
      <Router>
        <Route exact path='/' component={Form} />
        <Route exact path='/menu' component={Menu} />
      </Router>
    </div> 
  )
}

export default App;
