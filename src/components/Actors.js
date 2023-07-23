import React from "react";
import { actors } from "../data";

function Actors() {

  // console.log(actors)

  let list = actors.map((item) => {
    let movieList = item.movies.map((movie) => {
      return (
        <li key={movie}>{movie}</li>
        
      )
    })

    return(
      <div key={item.name}>
        <h2>Name: {item.name}</h2>
        <p>Movies:</p>
        <ul>{movieList}</ul>
      </div>
    )


  })

  return (
  <>
    <h1>Actors Page</h1>
    {list}
  </>
  );
}


export default Actors;
