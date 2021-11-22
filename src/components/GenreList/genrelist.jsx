import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './movie-list.scss';

import { SwiperSlide, Swiper } from 'swiper/react';
import { Link } from 'react-router-dom';
import Button, { OutlineButton } from '../button/Button';

import tmdbApi, { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import MovieCard from '../movie-card/MovieCard';

const Genre = props => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};
            

            if (props.type !== 'similar') {
                switch(props.category) {
                    case category.movie:
                        response = await tmdbApi.getGenre(props.type, {params});
                        break;
                        
                   }
            } else {
                response = await tmdbApi.similar(props.category, props.id);
            }
            console.log(response);
            
            setItems(response.genres);
        }
        getList();
    }, []);
    
    const Genre = async (item) => {
        
        let response = item;
        
        console.log(response);
    }


    return (
        <div className="movie-list">
            <Swiper
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={'auto'}
            >
                {
                    items.map((item, i) => (
                        <SwiperSlide key={i}>
                            <button className="small" onClick={Genre("item.id")} >  {item.name} </button>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

Genre.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default Genre;
