import React from "react";
import { directors } from "../data";

function Directors() {
  console.log(directors)

  let list = directors.map((item) => {
    let movieList = item.movies.map((movie) => {
      return (
        <li>
          {movie}
        </li>
      )
    })

    return(
      <div>
      <h1>Name: {item.name}</h1>
      <p>Movies:</p>
      <ul>
        {movieList}
      </ul>
      </div>
    )


  })

  return <div>{list}</div>;
}

export default Directors;
