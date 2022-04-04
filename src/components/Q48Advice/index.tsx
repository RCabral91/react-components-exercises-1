import { useCallback, useState } from 'react';
import axios from 'axios';

const api = axios.create();

const Q48Advice: React.FC = () => {
    const [showAdvice, setShowAdvice] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const getAdvice = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await api.get('https://api.adviceslip.com/advice');
            const { advice } = response.data.slip;
            setShowAdvice(advice);
        } catch {
            setShowAdvice('');
        } finally {
            setIsLoading(false);
        }
    }, []);

    return (
        <div>
            <span>{isLoading ? 'Loading' : showAdvice}</span>
            <button
                type="button"
                onClick={getAdvice}
                className="btn btn-primary"
            >
                Pesquisar Conselho
            </button>
        </div>
    );
};

export default Q48Advice;
