import React, { Component } from 'react';
import axios from 'axios';

class Movies extends Component{

	constructor(){
		super();
		this.state = {
			movie: {}
		}
	}

	componentWillReceiveProps(newProps){
		console.log(newProps);
		const mid = newProps.match.params.movieId;
		axios.get(`https://api.themoviedb.org/3/movie/${mid}?api_key=fec8b5ab27b292a68294261bb21b04a5`)
		.then((movieData)=>{
			console.log(movieData);
			this.setState({
				movie: movieData.data
			})
		})
	}

	componentDidMount(){
		const mid = this.props.match.params.movieId;
		console.log(mid)
		axios.get(`https://api.themoviedb.org/3/movie/${mid}?api_key=fec8b5ab27b292a68294261bb21b04a5`)
		.then((movieData)=>{
			console.log(movieData);
			this.setState({
				movie: movieData.data
			})
		})
	}

	render(){
		console.log (this.props)
		if(this.state.movie.title === undefined){
			return(
				<h1>Loading...</h1>
			)
		}
		var movie = this.state.movie;
		return(
			<div>
				<img src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`} />
				{movie.title}
				{movie.budget}
				{movie.tagline}
			</div>
		)
	}
}

export default Movies;