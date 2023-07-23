import React from "react";
import { movies } from "../data";

function Movies() {
  // console.log(movies)

  let movieList = movies.map((item) => {
    let list = item.genres.map((genre) => {
      return (
        <li key={genre}>
          {genre}
        </li>
      )
    })

    return(
      <div key={item.title}>
        <h2>Name: {item.title}</h2>
        <p>Time: {item.time}</p>
        <p>Genres:</p>
        <ul>
          {list}
        </ul>
      </div>
    )
  })

  return (
  <div>
    <h1>Movies Page</h1>
    {movieList}
  </div>
  );
}


export default Movies;
