interface IQ15FirstUppercaseProps {
    value: string;
}

const Q15FirstUppercase: React.FC<IQ15FirstUppercaseProps> = ({ value }) => {
    const lower = value.toLowerCase().split(' ');
    for (let i = 0; i < lower.length; i += 1) {
        const upper = lower[i];
        lower[i] = upper[0].toUpperCase() + upper.slice(1);
    }
    return <p>{lower.join(' ')}</p>;
};

export default Q15FirstUppercase;
