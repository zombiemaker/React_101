import React, { Component } from 'react';
import axios from "axios";

class About extends Component {
	constructor(props) {
		super(props);
		this.state={
			icon: "",
			temp: "",
			temp_min: "",
			temp_max: "",
			desc: ""			
		}
	}

	componentDidMount() {
		var url = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=30305,us&appid=482c145ce8edf1d69ea5168f9d06460c';
		axios.get(url)
		.then((weatherData)=>{
			console.log (weatherData)
			var weatherResults = weatherData.data;
			this.setState({
				icon: weatherData.data.weather[0].icon,
				temp: weatherResults.main.temp,
				temp_min: weatherResults.main.temp_min,
				temp_max: weatherResults.main.temp_max,
				desc: weatherResults.weather[0].description
			})
		})
	}

	render(){
		let iconUrl = `http://openweathermap.org/img/w/${this.state.icon}.png`;
		return(
			<div>
				<h1>Real-time Atlanta Weather!</h1>
				<h1><img src={iconUrl} /></h1>
				<h1>{this.state.desc} </h1>
				<h1>the temperature is: {this.state.temp} degrees</h1>
				<h1>the low today is: {this.state.temp_min} degrees</h1>
				<h1>the high today is: {this.state.temp_max} degrees</h1>
			</div>
		);
	}
}

export default About;
