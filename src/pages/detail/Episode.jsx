import React, { useState, useEffect } from 'react';
import './detail.scss';
import { useParams } from 'react-router';

import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import { OutlineButton } from '../../components/button/Button';
import EpisodeCard from './EpisodeCard';

const Episode = props => {

    const {category} = useParams();

    const [episodes, setEpisodes] = useState([]);
    const [totalEpisodes, setTotalEpisodes] = useState(0);
    const [initial, setInitial] = useState(0);
    const [final, setFinal] = useState(25);
    useEffect(() => {
        const getepisodes = async () => {
            //const res = await tmdbApi.episodes(props.id);
            setEpisodes(props.Episode.slice(0, 25));
            setInitial(0);
            setFinal(25);
            //console.log(props.Episode);
            setTotalEpisodes(props.totalEpisodes);
        }
        getepisodes();
    }, [category, props.id]);

    const prev = async () => {
        // if (initial > 0) {
            setInitial(initial - 25);
            setFinal(final - 25);
            setEpisodes(props.Episode.slice(initial - 25, final - 25));
            console.log(initial, final);
        // }
    }

    const next = async () => {
        // if (final < totalEpisodes) {
            setInitial(initial + 25);
            setFinal(final + 25);
            setEpisodes(props.Episode.slice(initial + 25, final + 25));
            //console.log(initial, final);
        // }
    }
    
    return (
        <>
        <div className="Episode-list">
                <div className="Episode-list__EpisodeNo">
                    <h3>{initial + 1} - {final}</h3>
                </div>
                <div className="Episode-list__item">
                    {episodes.map((item, i) => (
                        <div key={i} className="Episode-list__item">
                            <EpisodeCard item={item} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="Episode-list__pagination">
            <div className="Episode-Tabs">
            {
                totalEpisodes > 25 ? (
                    <div className="Episode-Tabs__header">
                        <div className="Episode-Tabs__header__btn">
                            <OutlineButton onClick={prev}>Prev</OutlineButton>
                            <OutlineButton onClick={next}>Next</OutlineButton>
                        </div>
                    </div>
                ) : null
            }
        </div>
        </div>
        </>
        
    );
}

export default Episode;