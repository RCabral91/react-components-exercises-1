import { useMemo } from 'react';

interface IQ25IsPrimeProps {
    value: number;
}
const Q25IsPrime: React.FC<IQ25IsPrimeProps> = ({ value }) => {
    const checkPrime = useMemo(() => {
        if (value <= 1) return false; // negatives
        if (value % 2 === 0 && value > 2) return false; // even numbers
        const s = Math.sqrt(value); // store the square to loop faster
        for (let i = 2; i < s; i += 1) {
            if (value % i === 0) return false;
        }
        return true;
    }, [value]);
    return <p>{checkPrime ? 'Sim' : 'Não'}</p>;
};

export default Q25IsPrime;
