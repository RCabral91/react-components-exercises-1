interface IQ7OnePhraseProps {
    value: string;
    value1: string;
}

const Q7OnePhrase: React.FC<IQ7OnePhraseProps> = ({ value, value1 }) => {
    const onePhrase = value + value1;
    return <p>{onePhrase}</p>;
};

export default Q7OnePhrase;
