import { useEffect, useState } from 'react';
import { fetchTrendingList } from '../api/api';
import MoviesList from '../components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';

const HomePage = () => {
  const [movieItems, setMovieItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getTrendingList() {
      try {
        setLoading(true);
        setError(false);

        const initialMovies = await fetchTrendingList();
        setMovieItems(initialMovies);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getTrendingList();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {loading && <Loader />}
      {error && (
        <h2>Oops! Something went wrong! Please try reloading this page!</h2>
      )}
      {movieItems.length > 0 && <MoviesList items={movieItems} />}
    </div>
  );
};

export default HomePage;