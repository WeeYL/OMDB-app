import React, { useContext, useState, useEffect } from "react";
import Pagination from "./component-pagination";
import paginate from "./utils-paginate";
import getMovieAxios from "./utils-getMovieAxios";

import {
  SearchMovieContext,
  MoviesContext,
  PaginateContext,
} from "./context-OmdbContext";

import Card from "./component-Card";

export default function () {
  const { searchMovie, setSearchMovieHandle } = useContext(SearchMovieContext);
  const { movies, setMoviesHandle, moviesLength } = useContext(MoviesContext);
  const { currentPage, setCurrentPageHandle } = useContext(PaginateContext);
  const pageSize = 3;

  useEffect(() => {
    getMovieAxios(searchMovie, setMoviesHandle);
  }, [searchMovie]);

  const filteredMovies = paginate(movies, currentPage, pageSize);
  return (
    <div>
      <div className="row">
        {filteredMovies &&
          filteredMovies.map((m) => (
            <Card
              key={m.imdbID}
              imdbID={m.imdbID}
              title={m.Title}
              year={m.Year}
              poster={m.Poster}
            />
          ))}
      </div>
      <div className="movie-container">
        <Pagination
          itemCounts={moviesLength}
          pageSize={pageSize}
          currentPage={currentPage}
          setCurrentPageHandle={setCurrentPageHandle}
        />
      </div>
    </div>
  );
}
