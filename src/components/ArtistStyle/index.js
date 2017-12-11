import React from 'react';
import './styles.css'


const ArtistStyle = (props) => {
    
    return (
        <div className="name">
            
            <h1 id="artistName">{props.artist.name}</h1>
            
           
            <div className="photo">
            {props.artist.image &&
            <img src={props.artist.image[4]["#text"]} />
            }
            </div>
            
            <div className="artistName">
            <h1> Plays: {props.artist.playcount}</h1>
            <h2> Listeners: {props.artist.listeners}</h2>
            <p>{JSON.stringify(props.artists)}</p>
            </div>
        </div>

    )
}

export default ArtistStyle 
