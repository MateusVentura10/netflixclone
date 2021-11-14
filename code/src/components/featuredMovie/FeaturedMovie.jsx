import React from 'react';
import './FeaturedMovie.css';

const FeaturedMovie = (props) => {
    const movie = props.movies;
    let count = 1;

    return(
        <section className="featured--area" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--info">
                        <div>
                            <h1 className="featured--title">{movie.original_name}</h1>

                            <span class="featured--data">
                                <span className="featured--average">{movie.vote_average + ' pontos'}</span>
                                <span className="featured--date">{movie.first_air_date.slice(0,4)}</span>
                                <span className="featured--seasons">
                                    {movie.number_of_seasons > 1 
                                        ? movie.number_of_seasons + ' temporadas'
                                        : movie.number_of_seasons + ' temporada'
                                    }
                                </span>
                            </span>

                            <p className="featured--description">{movie.overview.slice(0,250) + "..."}</p>

                            <div className="featured--btn">
                                <a className="featured--watch" href="">► Assistir</a>
                                <a className="featured--myList" href="">+ Minha lista</a>
                            </div>
                            
                            <div className="featured--genres">
                                <h5><strong>Gêneros: </strong></h5>
                                <span>{
                                    movie.genres.map(genre => {
                                        if(movie.genres.length == count) return genre.name;
                                        else{
                                            count++;
                                            return genre.name + ", ";
                                        }
                                    })
                                }</span> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedMovie;