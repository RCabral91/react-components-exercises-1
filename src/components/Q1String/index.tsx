interface IQ1StringProps {
    value: string;
}

// eslint-disable-next-line react/jsx-no-useless-fragment
const Q1String: React.FC<IQ1StringProps> = ({ value }) => <p>{value}</p>;

export default Q1String;
