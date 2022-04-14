import axios from 'axios';
import { useEffect, useState } from 'react';
import './index.css';

function row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const base_url = process.env.REACT_APP_TMDB_IMG_ENDPOINT;

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(fetchUrl);
      setMovies(res.data.results);
      return res;
    };
    fetchMovies();
  }, []);

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row__posters'>
        {movies.map(
            (movie) =>
              movie.poster_path &&
              movie.backdrop_path && (
                <img
                  className={`row__poster ${isLargeRow && 'row__postersLarge'}`}
                  key={movie.id}
                  src={`${base_url}/${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.original_name}
                />
              )
          )}
      </div>
    </div>
  );
}
export default row;
