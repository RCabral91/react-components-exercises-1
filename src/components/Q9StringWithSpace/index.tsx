interface IQ9StringWithSpaceProps {
    amount: number;
}

const Q9StringWithSpace: React.FC<IQ9StringWithSpaceProps> = ({ amount }) => {
    const word = [];

    for (let i = 1; i <= amount; i += 1) {
        word.push('oi');
    }
    return <p>{word.join(', ')}</p>;
};

export default Q9StringWithSpace;
