interface IQ32RectangleProps {
    x: number;
    width: number;
    height: number;
    color: string;
}

const Q32Rectangle: React.FC<IQ32RectangleProps> = ({
    x,
    width,
    height,
    color,
}) => {
    const rectangs = [];

    for (let i = 1; i <= x; i += 1) {
        rectangs.push(
            <div
                className="d-flex m-3"
                style={{ background: color, width, height }}
            />
        );
    }
    return <p>{rectangs.join('')}</p>;
};

export default Q32Rectangle;
