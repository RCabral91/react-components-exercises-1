import { useCallback } from 'react';

interface IQ32RectanglesProps {
    x: number;
    width: number;
    height: number;
    color: string;
}

const Q32Rectangles: React.FC<IQ32RectanglesProps> = ({
    x,
    width,
    height,
    color,
}) => {
    const rectangleArray = [] as number[];

    const buildRectanglesArray = useCallback(() => {
        for (let i = 1; i <= x; i += 1) {
            rectangleArray.push(i);
        }
    }, [x, width, height, color]);

    buildRectanglesArray();

    return (
        <div className="d-flex">
            {rectangleArray.map(index => (
                <div
                    key={index}
                    className="m-2"
                    style={{ height, width, backgroundColor: color }}
                />
            ))}
        </div>
    );
};

export default Q32Rectangles;
