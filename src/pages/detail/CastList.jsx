import React, { useState, useEffect } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';

import { useParams } from 'react-router';

import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

const CastList = props => {

    const {category} = useParams();

    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const getCredits = async () => {
            const res = props.item;
            console.log(res.characters);
            setCasts(res.characters);
        }
        getCredits();
    }, [category, props.id]);
    return (
        <div className="cast-list">
            <Swiper
                grabCursor={true}
                spaceBetween={15}
                slidesPerView={'auto'}
            >
            {
                casts.map((item, i) => (
                    <SwiperSlide key={i}>
                    <div key={i} className="casts__item">
                        <div className="casts__item__img" style={{backgroundImage: `url(${item.image})`, width: '120px'}}></div>
                        <p className="casts__item__name">{item.name.full}</p>
                    </div>
                    </SwiperSlide>
                ))
            }
            </Swiper>
            </div>
    );
}

export default CastList;