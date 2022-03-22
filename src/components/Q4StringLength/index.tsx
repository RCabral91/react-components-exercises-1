interface IQ4StringLengthProps {
    value: string;
}

const Q4StringLength: React.FC<IQ4StringLengthProps> = ({ value }) => (
    <p>{value.length}</p>
);

export default Q4StringLength;
