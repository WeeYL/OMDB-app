import React from "react";

import { SearchMovieContext } from "./context-OmdbContext";

const SearchBar = (props) => {
  const { setSearchMovieHandle } = React.useContext(SearchMovieContext);

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => setSearchMovieHandle(e.target.value)}
      ></input>
    </div>
  );
};

export default SearchBar;
