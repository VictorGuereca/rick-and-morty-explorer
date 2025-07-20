import React, { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';
import './CharacterList.module.css';

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [info, setInfo] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
            .then(res => res.json())
            .then(data => {
                setCharacters(data.results);
                setInfo(data.info);
            })
            .catch(err => console.error(err)); 
    }, [page]);

    return (
    <div>
        <div className="grid">
            {characters.map(char => (
                <CharacterCard key={char.id} character={char} />
            ))}
        </div>

        <div className="pagination">
            <button 
            onClick={() => setPage(prev => Math.max(prev - 1, 1))} 
            disabled={!info.prev}
            >
            Previous
            </button>
            <span>Page {page}</span>
            <button
            onClick={() => setPage(prev => prev +1)}
            disabled={!info.next}
            >
            Next
            </button>
        </div>
    </div>
);
};

export default CharacterList;
