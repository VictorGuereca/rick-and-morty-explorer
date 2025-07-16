import React from 'react';
import { useActionData, useParams } from 'react-router-dom';

const CharacterPage = () => {
    const { id } = useParams();
    return <h1>Character Page</h1>
};

export default CharacterPage;