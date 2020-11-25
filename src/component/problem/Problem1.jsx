import { useState, useEffect } from "react";
import getVisitors from "../utils/utils";

export default function Problem1() {
  const visitorsList = getVisitors();

  const getMoviesInfo = (favoriteMovies) => {
    return favoriteMovies.map((movies, vIndex) => (
      <li key={vIndex}>
        <div>Movie Name: {movies.name}</div>
        <div>DUration: {movies.duration}</div>
        <div>IMDB rating: {movies.IMDB}</div>
      </li>
    ));
  };

  if (visitorsList.length < 1) {
    return <img src="./images/Preloader.gif" alt="loader" />;
  }

  return (
    <div>
      {visitorsList.map((visitor, index) => (
        <div className="information" key={index}>
          <div className="name">
            <strong>Visitor Name:</strong> <span>{visitor.name}</span>
          </div>
          <div className="age">
            This visitor is <span>{visitor.age}</span> year's old
          </div>
          <div className="movies">
            Movies information:
            <ul>
              {getMoviesInfo(visitor.favoriteMovies)}
            </ul>
          </div>
        </div>
      ))}
      <p>
        <strong>Answers</strong>
      </p>
      <ul>
        <li>
          <p>
            Property could be primitive type, another object or array of objects
          </p>
          <strong>Object and array of object</strong>
        </li>
        <li>
          <p> Please give the approximate compatibility of browsers: </p>
          <strong>All browser will be supported by the above code</strong>.
        </li>
        <li>
          <p>
            Suppose the response is very large, does the solution have a
            performance bottleneck? Like block browser rendering.{" "}
          </p>
          <strong>
            We can use lazy loading to avoid block browser rendering. And other
            option is to handle at backend.
          </strong>
        </li>
        <li>
          <p>
            What if we want to get the uncompact response and make it
            serializable and get all the properties with Object.keys function?{" "}
          </p>
          <strong></strong>
        </li>
      </ul>
    </div>
  );
}
