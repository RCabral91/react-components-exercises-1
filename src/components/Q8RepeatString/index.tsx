interface IQ8RepeatStringProps {
    value: string;
    number: number;
}

const Q8RepeatString: React.FC<IQ8RepeatStringProps> = ({ value, number }) => (
    <p>{value.repeat(number)}</p>
);

export default Q8RepeatString;
