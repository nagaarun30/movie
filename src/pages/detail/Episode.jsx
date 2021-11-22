import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router';

import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import { OutlineButton } from '../../components/button/Button';

const Episode = props => {

    const {category} = useParams();

    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const getepisodes = async () => {
            const res = await tmdbApi.episodes(props.id);
            setCasts(res.episodes);
            console.log(res.episodes);
        }
        
        getepisodes();
    }, [category, props.id]);
    return (
        <div className="casts">
            {
                casts.map((item, i) => (
                    <div key={i} className="casts__item">
                        
                        <OutlineButton className="casts__item__name">{item.name.length > 15 ? item.name.substring(0,15) + " ..."  : item.name }</OutlineButton>
                    </div>
                ))
            }
        </div>
    );
}

export default Episode;