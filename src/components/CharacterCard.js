import React from 'react';
import './CharacterCard.module.css';

const CharacterCard = ({ character }) => {
    return (
        <div className="card">
            <img src={character.image} alt={character.name}/>
            <h3>{character.name}</h3>
        </div>
    );
};

export default CharacterCard;