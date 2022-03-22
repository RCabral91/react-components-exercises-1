interface IQ17SubtractionProps {
    value: number;
    value1: number;
}

const Q17Subtraction: React.FC<IQ17SubtractionProps> = ({ value, value1 }) => {
    const totalSubtraction = value - value1;
    return <p>{totalSubtraction}</p>;
};

export default Q17Subtraction;
