import React, { Component } from 'react';
import './App.css';
import BootstrapNavBar from './BootstrapNavBar'
import {
  BrowserRouter as Router,
  Route,
  // Link,
} from 'react-router-dom'
import Home from './Home';
import About from './About';
import MayorMessage from "./MayorMessage";
import Weather from "./Weather";
import Images from "./Images";
import TemperatureApp from './TemperatureApp';

var atlImages = [
  'http://i.huffpost.com/gen/1716876/images/o-ATLANTA-TRAFFIC-facebook.jpg',
  'http://2.bp.blogspot.com/--XZFLg6LSq8/U4YV65sb2MI/AAAAAAAAO8A/cFl-Em5Zb0A/s1600/Sawfish_Atlanta_Aquarium.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a3/Piedmont-park-urban-park.jpg'
]

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container main">
          <Route path="/" component ={BootstrapNavBar} />
          <Route path="/Home" component ={Home} />
          <Route path="/About" component ={About} />
          <Route exact path="/Weather" component ={Weather} />
          <Route path="/MayorMessage" component ={MayorMessage} />
          <Route path="/TemperatureApp" component ={TemperatureApp} />
          <Route path="/Images" render={(props)=><Images imageGallery={atlImages} />} />
          <div className="container main">
            <h1>Main App</h1>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
