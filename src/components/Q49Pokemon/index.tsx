import { useCallback, useState } from 'react';
import axios from 'axios';

const api = axios.create({ baseURL: 'https://pokeapi.co/api/v2/pokemon' });

const Q49Pokemon: React.FC = () => {
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div>
            <select className="form-select">
                <option value="">Escolha seu Pokemon</option>
                <option value="1">charmander</option>
                <option value="2">squirtle</option>
                <option value="3">caterpie</option>
                <option value="4">pidgey</option>
                <option value="5">bulbasaur</option>
            </select>
        </div>
    );
};

export default Q49Pokemon;
