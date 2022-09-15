import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import './detail.scss';
import CastList from './CastList';
import VideoList from './VideoList';
import Episode from './Episode';

import MovieList from '../../components/movie-list/MovieList';
import { OutlineButton } from '../../components/button/Button';
import Loader from '../../components/Loader/Loader';

const Detail = () => {

    const { category, id } = useParams();

    const [item, setItem] = useState(null);
    const [noOfEpisodes, setNoOfEpisodes] = useState(0);

    const [initial, setInitial] = useState(0);
    const [final, setFinal] = useState(0);

    useEffect(() => {
        const getDetail = async () => {
            setItem(null);
            await tmdbApi.detail(category, id, {params:{}})
            .then(res => {
                setItem(res);
                console.log(res);
                setNoOfEpisodes(res.totalEpisodes);
            }).catch(err => {
                console.log(err);
            }).finally(() => {
            });
            // console.log(response);
            // setItem(response);
            setInitial(0);
            setFinal(25);
            window.scrollTo(0,0);
        }
        getDetail();
    }, [category, id]);
    
    return (
        item == null ? <div className='Loading-Conatainer'><Loader/></div> :(
        <>
            {
                item && (
                    <>
                        <div className="banner" style={{backgroundImage: `url(${item.cover})`}}></div>
                        <div className="mb-3 movie-content container">
                            <div className="movie-content__poster">
                                <div className="movie-content__poster__img" style={{backgroundImage: `url(${item.image})`}}></div>
                            </div>
                            <div className="movie-content__info">
                                <h1 className="title">
                                    {item.title.english || item.title.romaji}
                                </h1>
                                <div className="genres">
                                    {
                                        item.genres && item.genres.slice(0, 5).map((genre, i) => (
                                            <span key={i} className="genres__item">{genre}</span>
                                        ))
                                    }
                                </div>
                                <p className="overview">{
                                    window.innerWidth > 768 ? (
                                    item.description.replaceAll(/<br>|<b>|<\/b>|<i>|<\/i>/gi,"")
                                     ): (
                                    item.description.replaceAll(/<br>|<b>|<\/b>|<i>|<\/i>/gi,"").slice(0, 200) + '...'
                                     )
                                }</p>
                                <div className="cast">
                                    <div className="section__header">
                                        <h2>Characters</h2>
                                    </div>
                                    <CastList item={item}/>
                                    
                                </div>
                                
                                
                            </div>
                        </div>
                        
                        <div className="container">
                            <div className="section__header">
                                <h2>Episode List</h2>
                            </div> 
                            <div className="episode-list">
                                {
                                    <Episode Episode={item.episodes} totalEpisodes={item.totalEpisodes}/>
                                }
                            </div>
                        </div>

                        <div className="container">
                            <div className="section mb-3">
                                <div className="section__header mb-2">
                                    <h2>Similar</h2>
                                </div>
                                <MovieList category={category} type="similar" id={item.id}/>
                                
                            </div>
                               
                        </div>
                    </>
                )
            }
        </>
        )
    );
}

export default Detail;