interface IQ18MultiplicationProps {
    value: number;
    value1: number;
}

const Q18Multiplication: React.FC<IQ18MultiplicationProps> = ({
    value,
    value1,
}) => {
    const totalMultiplication = value * value1;
    return <p>{totalMultiplication}</p>;
};

export default Q18Multiplication;
