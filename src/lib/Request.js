const requestsAPIs = {
  fetchTrending: `${process.env.REACT_APP_TMDB_API_ENDPOINT}/trending/all/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`,
  fetchNetflixOriginals: `${process.env.REACT_APP_TMDB_API_ENDPOINT}/discover/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_networks=213`,
  fetchComedyMovies: `${process.env.REACT_APP_TMDB_API_ENDPOINT}/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=35`,
  fetchHorrorMovies: `${process.env.REACT_APP_TMDB_API_ENDPOINT}/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=27`,
  fetchRomanceMovies: `${process.env.REACT_APP_TMDB_API_ENDPOINT}/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=10749`,
  fetchDocumentaries: `${process.env.REACT_APP_TMDB_API_ENDPOINT}/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=99`,
  fetchTopRated: `${process.env.REACT_APP_TMDB_API_ENDPOINT}/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
  fetchGeneres: `${process.env.REACT_APP_TMDB_API_ENDPOINT}/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
  fetchGenereData: `${process.env.REACT_APP_TMDB_API_ENDPOINT}/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=`,
};

export default requestsAPIs;
