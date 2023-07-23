import React from "react";
import { actors } from "../data";

function Actors() {

  console.log(actors)

  let list = actors.map((item) => {
    let movieList = item.movies.map((movie) => {
      return (
        <li>{movie}</li>
      )
    })

    return(
      <div>
        <h2>Name: {item.name}</h2>
        <p>Movies:</p>
        <ul>{movieList}</ul>
      </div>
    )


  })

  return (
  <div>
    <h1>Actors Page</h1>
    {list}
  </div>
  );
}


export default Actors;
