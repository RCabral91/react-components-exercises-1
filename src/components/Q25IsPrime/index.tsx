interface IQ25IsPrimeProps {
    value: number;
}

const Q25IsPrime: React.FC<IQ25IsPrimeProps> = ({ value }) => {
    for (let i = 2; i < value; ) {
        if (value % i === 0) return <p>Não</p>;
    }
    return <p>Sim</p>;
};

export default Q25IsPrime;
