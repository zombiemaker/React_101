import React, { Component } from 'react';
import Poster from './poster'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      movieList:[]
    }
    this.movieSearch = this.movieSearch.bind(this)
  }
  componentDidMount(){
    // this waits for the render to finish, then allows the work to be done. this is done
    // to keep the user from having to look at a blank page
    const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5"
    fetch(url)
    .then(response => response.json())
    .then(myJson => {
        // sets the results from the API so we can access the objects within an array
        const results = myJson.results
        // changes the state, forcing a new render
        this.setState({
        movieList:results
    })
      });
    console.log('checking...yes! it is mounted.')
    
  }

  movieSearch(event){
    event.preventDefault()
    console.log('form submitted!')
    const movieTitle = document.getElementById('searchTerm').value
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query='+movieTitle;
		fetch(url)
		.then((response)=>{
		  return response.json();
		})
		.then((myJson)=>{
			const results = myJson.results;
			console.log(results)
			this.setState({
				movieList: results
			});
		});	
  }

  render() {
    const posters = this.state.movieList.map((movie,i)=>{
      return(
        <Poster key={i} movie ={movie}/>
      )
    })
    return (
      <div className="container">
        <div className="row">
          <h1>The movie app...Again</h1>
          <form onSubmit ={this.movieSearch}>
            <input id="searchTerm" type="text" placeholder="Movie Title"/>
            <button type="submit" className="minus waves-effect waves-light btn">Search</button>
          </form>
          <br/>
          {posters}
        </div>
      </div>
    );
  }
}

export default App;
