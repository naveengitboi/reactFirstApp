import {React, useEffect, useState} from "react";
import './App.css'
import MovieCard from "./MovieCard";



const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=35ba8163"


function App() {
    let [movies, setMovies] = useState([])
    let [searchTerm, setSearchTerm] = useState('')
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        setMovies(data.Search)
        
    }

    useEffect(()=>{
        searchMovies()
    }, [])

    return ( 
        <div className="container">
            <h1 className="logo">Movies <span>world</span></h1>

            {/* search div */}
            <div className="search">
                <input type="text"
                 placeholder="Search for a movie"
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}/>

                 <button onClick={() => searchMovies(searchTerm)}>Search</button>
            </div>

            {
                movies?.length > 0?

                (<div className="movieContainer">
                    {
                        movies.map((movieItem) => {
                            return <MovieCard movie = {movieItem}/>
                        })
                    }
                </div>):
                <>
                <div className="emptyContent">
                    <h1>No movies found here</h1>
                </div>
               </>

            }
               
                
        </div>
     );
}

export default App;

