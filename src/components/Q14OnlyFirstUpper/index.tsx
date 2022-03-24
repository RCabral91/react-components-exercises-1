interface IQ14OnlyFirstUpperProps {
    value: string;
}

const Q14OnlyFirstUpper: React.FC<IQ14OnlyFirstUpperProps> = ({ value }) => (
    <p>{value[0].toUpperCase() + value.slice(1).toLowerCase()}</p>
);

export default Q14OnlyFirstUpper;
