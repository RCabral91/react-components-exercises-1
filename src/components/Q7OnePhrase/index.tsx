interface IQ7OnePhraseProps {
    value1: string;
    value2: string;
}

const Q7OnePhrase: React.FC<IQ7OnePhraseProps> = ({ value1, value2 }) => (
    <p>{`${value1} ${value2}`}</p>
);

export default Q7OnePhrase;
