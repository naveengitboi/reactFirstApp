import React from "react";

function MovieCard({movie}) {
    return ( 
        <div className="movieCard">
            <p className="year">{movie.Year}</p>
            <img src={movie.Poster} alt="MoviePoster" />
            <div className="movieDetails">
                <p className="type">{movie.Type}</p>
                <h3 className="title">{movie.Title}</h3>
            </div> 
            
        </div>
     );
}

export default MovieCard;




