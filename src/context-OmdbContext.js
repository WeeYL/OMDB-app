import React, { useState } from "react";

export const SearchMovieContext = React.createContext();
export const MoviesContext = React.createContext();
export const PaginateContext = React.createContext();

export default function SearchProvider({ children }) {
  const [searchMovie, setSearchMovie] = useState("social");
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  

  // requires at least 3 letters
  let moviesLength; 
  if (movies === undefined){
    moviesLength = 1
  } else {
    moviesLength = movies.length
  }
  
  function setSearchMovieHandle(e) {
    setSearchMovie(e);
  }

  function setMoviesHandle(m) {
    setMovies(m);
  }

  function setCurrentPageHandle(page){
    setCurrentPage(page)
  }

  return (

      <PaginateContext.Provider value={{currentPage, setCurrentPageHandle}}>
        <MoviesContext.Provider value={{movies, setMoviesHandle, moviesLength}}>
          <SearchMovieContext.Provider value={{searchMovie,setSearchMovieHandle}}>
            {children}
          </SearchMovieContext.Provider>
        </MoviesContext.Provider>
      </PaginateContext.Provider>

  );
}
