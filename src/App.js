import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/layout/NavBar';
import './App.css';
import Dashboard from './components/layout/Dashboard';
import Pokemon from "./components/pokemon/Pokemon";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route path='/pokemon/:pokemonIndex' component={Pokemon} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
