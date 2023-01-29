import React, { useEffect, useState } from 'react';

import './App.css';
import MovieCard from './MovieCard';

const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" className="bi bi-search" viewBox="0 0 16 16">
<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>

const API_URL = 'https://www.omdbapi.com?apikey=5f3657b1'


const App = () => {
    const [searchTitle, setSearchTitle] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search)
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

    return(
        <div className='app'>
            <h1>MovieLand</h1>

            <div className='search'>
                <input
                value={searchTitle}
                onChange={(e) => setSearchTitle(e.target.value)}
                placeholder='search for movies'
                />
                <span
                onClick={() => searchMovies(searchTitle)}
                >{searchIcon}</span>
            </div>
            {movies.length > 0 ? (
                <div className='container'>
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
          </div>
            ) : (
                <div className='empty'>
                    <h2>No Movies Found</h2>
            </div>
            )}
        </div>

    );
}

export default App;