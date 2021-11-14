import React, { useState, useEffect } from 'react';
import './MovieList.css';

const MovieList = props =>{
    const moviesList = props.movies;


    return (
        <section className="movieList--content">
            {
                moviesList.map((movies, key) => {
                   return (
                       <div className="movieList--area" key={key}>
                           <h2>{movies.title}</h2>

                           <div className="movieList--list">
                                <div className="movieList--left">
                                    <i class="fas fa-chevron-left"></i>
                                </div>
                                <div className="movieList--right">
                                    <i class="fas fa-chevron-right"></i>
                                </div>
                               {
                                    movies.items.results.map((movie, i) => {
                                        return (
                                            <div className="movieList--item"  key={i}>
                                                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />     
                                            </div>
                                        )
                                    })
                               }
                           </div>
                       </div>
                   )
                })
            }
        </section>
    );
}

export default MovieList;