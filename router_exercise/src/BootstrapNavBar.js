import React, {Component} from 'react'
import {Link} from 'react-router-dom'
// import Atlanta from "./Atlanta";
// import Images from "./Images";

class BootstrapNavBar extends Component{
  render(){
    return(
		<nav className="navbar navbar-default navbar-fixed-top">
		  <div className="container-fluid">
		    <div className="navbar-header">
		      <a className="navbar-brand" href="/Home">Atlanta App!</a>
		    </div>
		    <ul className="nav navbar-nav">
					<li><Link to="/Home">Home</Link></li>
					<li><Link to="/About">About</Link></li>
					<li><Link to="/Atlanta">Atlanta</Link></li>
					<li><Link to="/Images">Images</Link></li> 
					<li><Link to="/MayorMessage">MayorMessage</Link></li>
		    </ul>
		  </div>
		</nav>    
	)
  }
}

export default BootstrapNavBar;