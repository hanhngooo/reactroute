import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// import Back from "./Back";

function MovieDetail() {
  const [movie, setMovie] = useState({});
  const routeID = useParams();
  console.log(routeID);

  useEffect(() => {
    async function fetchMovieByID(imdbID) {
      console.log("What ID", imdbID);
      const response = await axios.get(
        `http://www.omdbapi.com/?i=${imdbID}&apikey=a6f411da`
      );
      console.log(response.data);
      setMovie(response.data);
    }

    fetchMovieByID(routeID.imdbID);
  }, [routeID]);
  // let history = useHistory();
  return (
    <div>
      <h4>{movie.Title}</h4>
      <img src={movie.Poster} />
      <p>{movie.Plot}</p>

      {/* <Back /> */}
      <Link to="/discover">See all movies</Link>
    </div>
  );
}

export default MovieDetail;
