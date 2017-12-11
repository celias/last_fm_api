import React from 'react';
import './styles.css'

const ArtistStyle = (props) => {
    
    return (
        <div className="name">
            <h1>{props.artist.name}</h1>
            <br />
            {props.artist.image &&
            <img src={props.artist.image[4]["#text"]} />
            }
            <h1> Play count: {props.artist.playcount}</h1>
            <h2> Number of listeners: {props.artist.listeners}</h2>
            <h2>{JSON.stringify(props.artists)}</h2>
        </div>

    )
}

export default ArtistStyle 
