import React from 'react'


// not everything has to be a class; if there isn't a render or any complexity, we 
// can keep it simple and make it just a function.
function Poster(props){
    // this is where we are returning JSX, which is transitioned to Javascript and back to HTML
    const imagePath = `http://image.tmdb.org/t/p/w300/${props.movie.poster_path}`      
    const moviePath = `http://www.themoviedb.org/movie/${props.movie.id}`
    const title = props.movie.title
    return(
        <div className="col s3 center">
            <a href={moviePath} target="blank">
                <img src={imagePath} />
            </a>
            <div className="col s12">
                {title}
            </div>
        </div>
    )
}

export default Poster