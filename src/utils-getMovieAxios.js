import axios from 'axios'
export default async function getMovieAxios (searchMovie,setMoviesHandle)  {


    const URL = `http://www.omdbapi.com/?apikey=2dff20f3&s=${searchMovie}`;
    const response = await axios.get(URL);

  setMoviesHandle(response.data.Search);
};
