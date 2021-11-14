import React, {useEffect, useState} from 'react';
import './App.css';
import Tmdb from '../../js/Tmdb';
import Header from '../header/Header';
import FeaturedMovie from '../featuredMovie/FeaturedMovie';
import MovieList from '../movieList/MovieList';
import Footer from '../footer/Footer';

const App = () => {

  const [movieList, setMoveList] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);

  useEffect(() => {

    /* get movies */
    const getMovieList = async (list) => {
      const movies = await list.getHomeList();
      setMoveList(movies);

      /* get featured */
      const featured = movies.filter(movie => movie.slug === "originals");
      const chosem = Math.floor(Math.random() * (featured[0].items.results.length - 1));
      const featuredChosem = featured[0].items.results[chosem];

      const chosemInfo = await list.getMovieInfo(featuredChosem.id, 'tv');
      setFeaturedMovie(chosemInfo);
    };

    getMovieList(Tmdb);

  }, []);

  return (
    <div>

      <Header />

      <main>

        {featuredMovie &&
          <FeaturedMovie movies={featuredMovie} />
        }

        <MovieList movies={movieList} />

      </main>

      <Footer />

      {movieList.length <= 0 &&
        <div className="loading">
            <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"></img>
        </div>
      }
    </div>
  )
} 

export default App;