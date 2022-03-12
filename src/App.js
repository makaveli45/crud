import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router,  Route, Switch } from "react-router-dom";
import AppRoute from "./route";
import Home from './Pages/Home';
import Create from './Pages/Create';

function App() {

  
  return (
    <Router>

              <Switch>

              <Route exact path="/" component={Home} />
              <Route exact path="/create" component={Create} />

              </Switch>
       
        </Router>
  );
}

export default App;
