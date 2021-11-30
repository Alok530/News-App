import './App.css';
import React from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  let pageSize = 9;
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/"><News key="general" pagesize={pageSize} country="in" category="general" /></Route>
          <Route exact path="/home"><News key="general" pagesize={pageSize} country="in" category="general" /></Route>
          <Route exact path="/health"><News key="health" pagesize={pageSize} country="in" category="health" /></Route>
          <Route exact path="/sports"><News key="sports" pagesize={pageSize} country="in" category="sports" /></Route>
          <Route exact path="/science"><News key="science" pagesize={pageSize} country="in" category="science" /></Route>
          <Route exact path="/business"><News key="business" pagesize={pageSize} country="in" category="business" /></Route>
          <Route exact path="/technology"><News key="technology" pagesize={pageSize} country="in" category="technology" /></Route>
          <Route exact path="/entertainment"><News key="entertainment" pagesize={pageSize} country="in" category="entertainment" /></Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;
