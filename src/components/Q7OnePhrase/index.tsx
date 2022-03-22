interface IQ7OnePhraseProps {
    value: string;
    value1: string;
}

const Q7OnePhrase: React.FC<IQ7OnePhraseProps> = ({ value, value1 }) => (
    <p>{`${value} ${value1}`}</p>
);

export default Q7OnePhrase;
