import React from "react";

function DisplaySimpons({ simpson }) {
  return (
    <div className="DisplaySimpson">
      <img id="image" src={simpson[0].image} alt={simpson[0].image} />
      <ul>
        <p>{simpson[0].character}</p>
        <p>{simpson[0].quote}</p>
      </ul>
    </div>
  );
}

export default DisplaySimpons;
