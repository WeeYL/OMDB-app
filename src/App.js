import React from "react";
import "./App.css";
import Movies from "./component-Movies";
import SearchBar from "./component-SearchBar";
import SearchProvider from "./context-OmdbContext";

function App() {
  return (
    <div>
      <SearchProvider>
        <div className="webHeader">
          <h2>My Movie</h2>
          <div className="searchBar">
            <SearchBar />
          </div>
        </div>

        <div className="movie-container">
          <Movies />
        </div>
      </SearchProvider>
    </div>
  );
}

export default App;
