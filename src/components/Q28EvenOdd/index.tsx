interface IQ28EvenOddProps {
    value: number;
}

const Q28EvenOdd: React.FC<IQ28EvenOddProps> = ({ value }) => (
    <p>{value % 2 === 0 ? 'Par' : 'Ímpar'}</p>
);

export default Q28EvenOdd;
