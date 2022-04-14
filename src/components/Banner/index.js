import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import requestsAPIs from '../../lib/Request';
import no1MovieToday from '../../assets/svg/no1MovieToday.svg';
import './index.css';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchNetflixOriginals = async () => {
      const res = await axios.get(requestsAPIs.fetchNetflixOriginals);
      setMovie(
        res.data.results[Math.floor(Math.random() * res.data.results.length)]
      );
      return res;
    };
    fetchNetflixOriginals();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };

  return (
    <header
      className='banner'
      style={{
        backgroundImage:
          movie.backdrop_path &&
          `url(${process.env.REACT_APP_TMDB_IMG_ENDPOINT}/${movie.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center container',
      }}
    >
      <div className='banner__contents'>
        <h1 className='banner__title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <h2 className='banner__supplemental-message'>
          <img src={no1MovieToday} style={{ marginRight: '15px' }} />
          #1 in Movies Today
        </h2>

        <h1 className='banner__discription'>
          {truncate(movie?.overview, 170)}
        </h1>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>
      </div>
      <div className='banner--fadeButtom' />
    </header>
  );
}
export default Banner;
