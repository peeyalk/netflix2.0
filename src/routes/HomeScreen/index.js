import axios from 'axios';
import { useEffect, useState } from 'react';
import requestsAPIs from '../../lib/Request';
import Banner from '../../components/Banner';
import Nav from '../../components/Navbar';
import Row from '../../components/Row';
import './index.css';

function HomeScreen() {
  useEffect(() => {
    // return naviagte('/');
  });

  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getGenres = async () => {
      const res = await axios.get(requestsAPIs.fetchGeneres);
      setGenres(res.data.genres.sort((a, b) => 0.5 - Math.random()));
      return res;
    };

    getGenres();
  }, []);


  return (
    <div className='homeScreen'>
      {/* Nav */}
      <Nav />

      {/* Banner */}
      <Banner />

      {/* Row */}
      <Row
        title='NETFLIX ORIGINAL'
        fetchUrl={requestsAPIs.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title='Trending Now' fetchUrl={requestsAPIs.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requestsAPIs.fetchTopRated} />

      {genres.map((genre) => (
        <Row
          key={genre.id}
          title={genre.name}
          fetchUrl={`${requestsAPIs.fetchGenereData}${genre.id}`}
        />
      ))}

      <div style={{ height: '40px' }}></div>
    </div>
  );
}
export default HomeScreen;
