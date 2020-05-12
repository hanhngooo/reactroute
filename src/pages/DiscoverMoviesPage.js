import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function DiscoverMoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [appState, setAppState] = useState("");

  async function fetchMovies(userSearchTerm) {
    setAppState("searching");

    const response = await axios.get(
      `http://www.omdbapi.com/?s=${userSearchTerm}&apikey=a6f411da`
    );

    // console.log(response.data.Search);
    setMovies(response.data.Search);
    setAppState("");
  }

  useEffect(() => {}, []);

  if (appState === "searching") {
    return <h3>Please wait.</h3>;
  }
  // console.log("Movies list", movies);

  return (
    <div>
      <input
        value={searchMovie}
        onChange={(event) => setSearchMovie(event.target.value)}
      />
      <button onClick={() => fetchMovies(searchMovie)}>Search</button>

      {movies.map((movie) => {
        return (
          <div>
            <h3>
              {movie.Title} - {movie.Year}
            </h3>
            <img src={movie.Poster} alt="Poster" />
            <p>
              <Link to={`/discover/${movie.imdbID}`}> Details </Link>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default DiscoverMoviesPage;
