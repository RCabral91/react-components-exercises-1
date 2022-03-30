import { useMemo } from 'react';

interface IQ33CirclesProps {
    x: number;
    size: number;
    color: string;
}

const Q33Circles: React.FC<IQ33CirclesProps> = ({ x, size, color }) => {
    const circles = useMemo(() => {
        const c = [];
        for (let i = 1; i <= x; i += 1) {
            c.push(i);
        }
        return c;
    }, [x]);

    return (
        <div className="d-flex">
            {circles.map(index => (
                <div
                    key={index}
                    className="m-2"
                    style={{
                        height: size,
                        width: size,
                        borderRadius: size,
                        backgroundColor: color,
                    }}
                />
            ))}
        </div>
    );
};

export default Q33Circles;
