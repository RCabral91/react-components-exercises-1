interface IQ9StringWithSpaceProps {
    amount: number;
    value: string;
}

const Q9StringWithSpace: React.FC<IQ9StringWithSpaceProps> = ({
    amount,
    value,
}) => {
    const word = [];

    for (let i = 1; i <= amount; i += 1) {
        word.push(value);
    }
    return <p>{word.join(', ')}</p>;
};

export default Q9StringWithSpace;
