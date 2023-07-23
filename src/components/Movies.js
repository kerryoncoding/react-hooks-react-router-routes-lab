import React from "react";
import { movies } from "../data";

function Movies() {
  console.log(movies)

  let movieList = movies.map((item) => {
    let list = item.genres.map((genre) => {
      return (
        <li>
          {genre}
        </li>
      )
    })

    return(
      <div>
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
    <h1>Moives Page</h1>
    {movieList}
  </div>
  );
}


export default Movies;
