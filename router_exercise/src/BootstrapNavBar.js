import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class BootstrapNavBar extends Component{
	constructor(){
		super();
		this.state={
			activeLink:"",
		}
	}

	setActiveLink(linkRoute){
		this.setState({
			activeLink:linkRoute,
		})
	}

  render(){
    return(
		<nav className="navbar navbar-default navbar-fixed-top">
		  <div className="container-fluid">
		    <div className="navbar-header">
		      <a className="navbar-brand" href="/Home">Atlanta App!</a>
		    </div>
		    <ul className="nav navbar-nav">
					<li>
						<Link onClick={()=>{this.setActiveLink('./Home')}} to="/Home">
							<span className={this.state.activeLink==='./Home' ? 'active' : ""}>
								Home
							</span>
						</Link>
					</li>
					<li>
						<Link onClick={()=>{this.setActiveLink('./About')}} to="/About">
							<span className={this.state.activeLink==='./About' ? 'active' : ""}>
								About
							</span>
						</Link>
					</li>
					<li>
						<Link onClick={()=>{this.setActiveLink('./Weather')}} to="/Weather">
							<span className={this.state.activeLink==='./Weather' ? 'active' : ""}>
								Weather
							</span>
						</Link>
					</li>
					<li>
						<Link onClick={()=>{this.setActiveLink('./Images')}} to="/Images">
							<span className={this.state.activeLink==='./Images' ? 'active' : ""}>
								Images
							</span>
						</Link>
					</li> 
					<li>
						<Link onClick={()=>{this.setActiveLink('./MayorMessage')}} to="/MayorMessage">
							<span className={this.state.activeLink==='./MayorMessage' ? 'active' : ""}>
								MayorMessage
							</span>
						</Link>
					</li>
					<li>
						<Link onClick={()=>{this.setActiveLink('./TemperatureApp')}} to="/TemperatureApp">
							<span className={this.state.activeLink==='./TemperatureApp' ? 'active' : ""}>
								Temperature App
							</span>
						</Link>
					</li>
		    </ul>
		  </div>
		</nav>    
	)
  }
}

export default BootstrapNavBar;