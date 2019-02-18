import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import About from './About';
import Home from "./Home";
import Movies from './MovieList';
import Movie from "./Movies";

class App extends Component {
  // the router goes around everything it needs to control.
  render() {
    const superhero = "Alita"
    return (

    <Router>
      <div className="App">
        <ul>
          {/* In React router, we don't use a tags, that is so 2015 */}
          {/* <li><a href="/">home</a></li> */}
          {/* <li><a href="/about">about</a></li> */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/movies">Movies</Link></li>
        </ul>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/" component={(props)=>
          <div>
            <Home superHero = {superhero}/>
          </div>
        } />
        <Route path="/about" component={About}/>
        <Route exact path="/movies" component={Movies}/>
        <Route path="/movies/:movieId" component= {Movie}/>
      </div>

    </Router>
    );
  }
}

export default App;
