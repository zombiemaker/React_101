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
				desc: weatherResults.main.desc
			})
		})
	}

	render(){
		return(
			<div>
				<h1>Real-time Atlanta Weather!</h1>
			</div>
		);
	}
}

export default About;
