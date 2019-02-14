
// not everything has to be a class; if there isn't a render or any complexity, we 
// can keep it simple and make it just a function.
function Poster(props){
    // this is where we are returning JSX, which is transitioned to Javascript and back to HTML
    return(
        <div className="col s4 m3">
            <img src={props.image}/>
        </div>
    )
}

class App extends React.Component{
    // gotta do constructor, but don't need props 
    constructor(props){
        // gotta do super to get access to the react parent functions
        super(props)
        // this sets the state and allows the page to load; updates and re-renders 
        // come afterwards
        this.state = {
            moviesToShow:[]
        }  
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
            moviesToShow:results
        })
          });
        console.log('checking...yes! it is mounted.')
        
    }
    // render is special, React uses it and we don't
    render(){
        const imagePath = "http://image.tmdb.org/t/p/w300"
        // this is where the magic happens; we load tons of info, but as of yet 
        // only access the posters
        let movieList = this.state.moviesToShow.map((movie)=>{
            const fullImagePath = imagePath+movie.poster_path
            return(<Poster key ={movie.id} image={fullImagePath}/>)
            // this is where the poster function is invoked, which is where we send
            // the key and the image as "props"
        })
        // console.log(this.state.moviesToShow)
        return(
            // this is where we are actually updating the DOM
           <div className="container">
                <div className="row">
                    <div className="col s12">
                        {movieList}
                    </div>
                </div>
           </div>
        )
    }
}

ReactDOM.render(
    <App title="Another Movie App"/>, 
    document.getElementById('root')
);