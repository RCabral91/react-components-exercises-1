import axios from 'axios';
import { useCallback, useState } from 'react';

const api = axios.create();

const Q47DolToReal: React.FC = () => {
    const [dollar, setDollar] = useState(0);
    const [result, setResult] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const convertDol = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await api.get(
                'https://economia.awesomeapi.com.br/json/last/USD'
            );
            const { bid } = response.data.USDBRL;
            setResult(dollar * parseFloat(bid));
        } catch {
            setResult(0);
        } finally {
            setIsLoading(false);
        }
    }, [dollar]);

    return (
        <div>
            <input
                className="m-3"
                type="number"
                onChange={e => setDollar(parseFloat(e.target.value, 10))}
            />
            <span>{isLoading ? 'Loading' : result}</span>
            <button
                className="btn btn-primary"
                type="button"
                onClick={convertDol}
            >
                Converter
            </button>
        </div>
    );
};

export default Q47DolToReal;
