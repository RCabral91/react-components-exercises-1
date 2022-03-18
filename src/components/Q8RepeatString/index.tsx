interface IQ8RepeatStringProps {
    oi: string;
    3?: number;
}

const Q8RepeatString: React.FC<IQ8RepeatStringProps> = ({ oi }) => (
    <p>{oi.repeat(3)}</p>
);

export default Q8RepeatString;
