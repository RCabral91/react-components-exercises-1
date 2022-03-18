interface IQ10BiggerTextProps {
    aparicio: string;
    cabral: string;
}

const Q10BiggerText: React.FC<IQ10BiggerTextProps> = ({ aparicio, cabral }) => (
    <>{aparicio.length > cabral.length ? 'aparicio' : 'cabral'} </>
);

export default Q10BiggerText;
