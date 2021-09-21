import './../App.css';
import ParksByState from './ParksByState'
import Home from './Home';
import React from 'react';
import NavBar from '../components/NavBar';
import {Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
          <NavBar />
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/parksbystate">
          <ParksByState />
        </Route>
        <Route exact path="/contact">
        </Route>
      </Switch>

    </div>
  );
}

export default App;
