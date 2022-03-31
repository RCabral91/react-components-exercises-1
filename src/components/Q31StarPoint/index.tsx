import { useMemo } from 'react';
import { AiFillStar } from 'react-icons/ai';

interface IQ31StarPointProp {
    score: number;
}

const Q31StarPoint: React.FC<IQ31StarPointProp> = ({ score }) => {
    const stars = useMemo(
        () => [...Array(5)].map((_, index) => index < score),
        [score]
    );

    return (
        <div className="d-flex">
            {stars.map(star => (
                <div className={`text-${star ? 'warning' : 'muted'}`}>
                    <AiFillStar className="fs-4" />
                </div>
            ))}
        </div>
    );
};

export default Q31StarPoint;
