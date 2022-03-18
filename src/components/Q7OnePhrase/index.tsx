interface IQ7OnePhraseProps {
    oi: string;
    beleza: string;
}

const Q7OnePhrase: React.FC<IQ7OnePhraseProps> = ({ oi, beleza }) => (
    <>{oi.concat(beleza)}</>
);

export default Q7OnePhrase;
