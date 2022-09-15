import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button, { OutlineButton } from '../components/button/Button';
import HeroSlide from '../components/hero-slide/HeroSlide';
import MovieList from '../components/movie-list/MovieList';
import tmdbApi,{ category,movieType,tvType,mediaType } from '../api/tmdbApi';
import Trending from '../components/movie-list/trending-list';
import Genre from '../components/GenreList/genrelist';

const Home = () => {
    return (
        <>
            <HeroSlide />
            <div className="container">
             <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending Today</h2>
                        
                    </div>
                    <Trending category={category.all} type={mediaType.all}  />
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Treanding Animes</h2>
                        <Link to="/movie">
                            <Button className="small" > View More </Button>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular} />
                </div>
                
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Airing Today</h2>
                        <Link to="/tv">
                            <Button className="small" > View More </Button>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={movieType.popular} />
                </div>
                
            </div>
        </>
    );
}

export default Home;
