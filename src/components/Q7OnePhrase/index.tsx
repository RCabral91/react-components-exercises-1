interface IQ7OnePhraseProps {
    fala: string;
    malany: string;
}

const Q7OnePhrase: React.FC<IQ7OnePhraseProps> = ({ fala, malany }) => (
    <>{fala.concat(malany)}</>
);

export default Q7OnePhrase;
