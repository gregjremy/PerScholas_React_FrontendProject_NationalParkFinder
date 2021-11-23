import './../App.css';
import ParksByState from './ParksByState'
import Home from './Home';
import React from 'react';
import NavBar from '../components/NavBar';
import {Switch, Route} from 'react-router-dom';
import ParksByEvent from './ParksByEvents';
import ParksByActivity from './ParksByActivity';

function App() {
  return (
    <div className="App">
          <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/parksbystate">
          <ParksByState />
        </Route>
        <Route exact path="/parksbyactivity">
          <ParksByActivity />
        </ Route>
        <Route exact path="/parksbyevent">
          <ParksByEvent />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
