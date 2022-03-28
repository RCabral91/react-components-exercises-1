import { useCallback } from 'react';

interface IQ33CirclesProps {
    x: number;
    size: number;
    color: string;
}

const Q33Circles: React.FC<IQ33CirclesProps> = ({ x, size, color }) => {
    const circleArray: number[] = [];

    const buildCirclesArray =
        (() => {
            for (let i = 1; i <= x; i += 1) {
                circleArray.push(i);
            }
        },
        [x]);

    return (
        <div className="d-flex">
            {circleArray.map(index => (
                <div
                    key={index}
                    className="m-2"
                    style={{ backgroundColor: color }}
                />
            ))}
        </div>
    );
};

export default Q33Circles;
