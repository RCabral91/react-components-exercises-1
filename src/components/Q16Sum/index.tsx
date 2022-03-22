interface IQ16SumProps {
    value: number;
    value1: number;
}

const Q16Sum: React.FC<IQ16SumProps> = ({ value, value1 }) => {
    const totalSum = value + value1;
    return <p>{totalSum}</p>;
};

export default Q16Sum;
