import "./App.css";
const Card = (props) => {
  const { title, year, poster, imdbID } = props;
  return (
    <>
      <div className="movie-container vl">
        <a href={`https://www.imdb.com/title/${imdbID}` } target="_blank" rel="noreferrer" className="movieTitle">
          {title}
        </a>
        <p> Released in: {year}</p>

        <img
          className="poster"
          src={poster === "N/A"? "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg": poster} />
      </div>
      <div className="vl"></div>
    </>
  );
};

export default Card;
