import React from 'react'
import { OutlineButton } from '../../components/button/Button';
import './detail.scss';

const EpisodeCard = props => {
    const item = props.item;
    return (

    <div className="Episode-card Episode-list-Grid">
        <div className="Episode-card__img"
            style={{backgroundImage: `url(${item.image})`}}>
                
                <OutlineButton className = "Episode-card__btn">
                    <i className="bx bx-play"></i>
                </OutlineButton>
        </div>
        <div className="Episode-card__info">
            <h3>{item.number + ". "}{item.title || item.id}</h3>
            <p>
                {
                    item.description == null ?
                    "No description available" :
                    (
                    item.description.length > 170 ? item.description.substring(0,170) + "..." : item.description
                )}
            </p>
        </div>
    </div>
    );
}

export default EpisodeCard